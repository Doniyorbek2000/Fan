import { Response } from 'express';
import { prisma } from '../utils/prisma';
import { AuthRequest } from '../middleware/auth.middleware';
import { AppError } from '../middleware/error.middleware';
import { z } from 'zod';

const createBookingSchema = z.object({
  celebrityId: z.string().uuid(),
  type: z.enum(['VIDEO_MESSAGE', 'CHAT', 'VIDEO_CALL', 'LIVE_MEETUP']),
  scheduledAt: z.string().datetime().optional(),
  message: z.string().optional(),
});

export const createBooking = async (req: AuthRequest, res: Response) => {
  const data = createBookingSchema.parse(req.body);

  const fan = await prisma.fan.findUnique({ where: { userId: req.user!.id } });
  if (!fan) throw new AppError(403, 'Faqat muxlislar band qila oladi');

  const celebrity = await prisma.celebrity.findUnique({ where: { id: data.celebrityId } });
  if (!celebrity) throw new AppError(404, 'Mashhur topilmadi');
  if (!celebrity.isAvailable) throw new AppError(400, 'Mashhur hozir band emas');

  const service = await prisma.celebrityService.findFirst({
    where: { celebrityId: data.celebrityId, type: data.type, isActive: true },
  });
  if (!service) throw new AppError(404, 'Bu xizmat mavjud emas');

  const wallet = await prisma.wallet.findUnique({ where: { userId: req.user!.id } });
  if (!wallet || wallet.balance < service.price) {
    throw new AppError(400, 'Hamyonda yetarli mablag\' yo\'q');
  }

  const booking = await prisma.$transaction(async (tx) => {
    const b = await tx.booking.create({
      data: {
        fanId: fan.id,
        celebrityId: data.celebrityId,
        type: data.type,
        price: service.price,
        scheduledAt: data.scheduledAt ? new Date(data.scheduledAt) : undefined,
        message: data.message,
      },
      include: {
        celebrity: { include: { user: { include: { profile: true } } } },
      },
    });

    await tx.wallet.update({
      where: { userId: req.user!.id },
      data: { balance: { decrement: service.price }, totalSpent: { increment: service.price } },
    });

    await tx.transaction.create({
      data: {
        walletId: wallet.id,
        type: 'BOOKING_PAYMENT',
        amount: -service.price,
        description: `Band qilish: ${b.celebrity.user.profile?.displayName || 'Mashhur'}`,
        reference: b.id,
      },
    });

    await tx.payment.create({
      data: { bookingId: b.id, amount: service.price, status: 'COMPLETED', method: 'WALLET', processedAt: new Date() },
    });

    await tx.notification.create({
      data: {
        userId: b.celebrity.userId,
        type: 'NEW_BOOKING',
        title: 'Yangi band qilish',
        body: `Sizda yangi ${data.type} so\'rovi mavjud`,
        data: { bookingId: b.id },
      },
    });

    return b;
  });

  res.status(201).json(booking);
};

export const getMyBookings = async (req: AuthRequest, res: Response) => {
  const { status, page = '1', limit = '20' } = req.query;
  const skip = (parseInt(page as string) - 1) * parseInt(limit as string);

  const fan = await prisma.fan.findUnique({ where: { userId: req.user!.id } });
  const celebrity = await prisma.celebrity.findUnique({ where: { userId: req.user!.id } });

  const where: Record<string, unknown> = {};
  if (fan) where.fanId = fan.id;
  if (celebrity) where.celebrityId = celebrity.id;
  if (status) where.status = status;

  const [bookings, total] = await Promise.all([
    prisma.booking.findMany({
      where,
      skip,
      take: parseInt(limit as string),
      orderBy: { createdAt: 'desc' },
      include: {
        fan: { include: { user: { include: { profile: true } } } },
        celebrity: { include: { user: { include: { profile: true } } } },
        payment: true,
        review: true,
      },
    }),
    prisma.booking.count({ where }),
  ]);

  res.json({ data: bookings, meta: { total, page: parseInt(page as string), limit: parseInt(limit as string) } });
};

export const updateBookingStatus = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const { status, notes } = req.body;

  const booking = await prisma.booking.findUnique({
    where: { id },
    include: { celebrity: true, fan: true },
  });
  if (!booking) throw new AppError(404, 'Band qilish topilmadi');

  const celebrity = await prisma.celebrity.findUnique({ where: { userId: req.user!.id } });
  if (!celebrity || booking.celebrityId !== celebrity.id) {
    throw new AppError(403, 'Ruxsat yo\'q');
  }

  const updated = await prisma.booking.update({
    where: { id },
    data: { status, notes, completedAt: status === 'COMPLETED' ? new Date() : undefined },
  });

  if (status === 'CONFIRMED') {
    await prisma.notification.create({
      data: {
        userId: booking.fan.userId,
        type: 'BOOKING_CONFIRMED',
        title: 'Band qilish tasdiqlandi',
        body: 'Sizning band qilishingiz mashhur tomonidan tasdiqlandi',
        data: { bookingId: id },
      },
    });
  }

  if (status === 'COMPLETED') {
    await prisma.celebrity.update({
      where: { id: celebrity.id },
      data: {
        totalEarnings: { increment: booking.price },
        monthlyEarnings: { increment: booking.price },
        completedBookings: { increment: 1 },
      },
    });

    const celWallet = await prisma.wallet.findUnique({ where: { userId: req.user!.id } });
    if (celWallet) {
      const earnings = booking.price * 0.85; // 15% platform fee
      await prisma.$transaction([
        prisma.wallet.update({
          where: { id: celWallet.id },
          data: { balance: { increment: earnings }, totalEarned: { increment: earnings } },
        }),
        prisma.transaction.create({
          data: {
            walletId: celWallet.id,
            type: 'BOOKING_PAYMENT',
            amount: earnings,
            description: 'Band qilish to\'lovi',
            reference: id,
          },
        }),
      ]);
    }
  }

  res.json(updated);
};

export const cancelBooking = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const booking = await prisma.booking.findUnique({ where: { id }, include: { fan: true } });
  if (!booking) throw new AppError(404, 'Band qilish topilmadi');

  const fan = await prisma.fan.findUnique({ where: { userId: req.user!.id } });
  if (!fan || booking.fanId !== fan.id) throw new AppError(403, 'Ruxsat yo\'q');
  if (!['PENDING', 'CONFIRMED'].includes(booking.status)) {
    throw new AppError(400, 'Bu band qilishni bekor qilib bo\'lmaydi');
  }

  await prisma.$transaction(async (tx) => {
    await tx.booking.update({ where: { id }, data: { status: 'CANCELLED' } });

    const wallet = await tx.wallet.findUnique({ where: { userId: req.user!.id } });
    if (wallet) {
      await tx.wallet.update({
        where: { id: wallet.id },
        data: { balance: { increment: booking.price }, totalSpent: { decrement: booking.price } },
      });
      await tx.transaction.create({
        data: {
          walletId: wallet.id,
          type: 'BOOKING_REFUND',
          amount: booking.price,
          description: 'Band qilish bekor qilindi - qaytarish',
          reference: id,
        },
      });
    }
  });

  res.json({ message: 'Band qilish bekor qilindi va mablag\' qaytarildi' });
};
