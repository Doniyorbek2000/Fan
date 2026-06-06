import { Response } from 'express';
import { prisma } from '../utils/prisma';
import { AuthRequest } from '../middleware/auth.middleware';
import { AppError } from '../middleware/error.middleware';

export const getDashboardStats = async (_req: AuthRequest, res: Response) => {
  const now = new Date();
  const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);

  const [
    totalUsers, newUsersThisMonth,
    totalCelebrities, verifiedCelebrities,
    totalBookings, monthlyBookings,
    totalRevenue, monthlyRevenue,
    pendingVerifications, activeBookings,
    recentUsers, recentBookings,
  ] = await Promise.all([
    prisma.user.count(),
    prisma.user.count({ where: { createdAt: { gte: thisMonth } } }),
    prisma.celebrity.count(),
    prisma.celebrity.count({ where: { user: { verificationStatus: 'VERIFIED' } } }),
    prisma.booking.count(),
    prisma.booking.count({ where: { createdAt: { gte: thisMonth } } }),
    prisma.payment.aggregate({ where: { status: 'COMPLETED' }, _sum: { amount: true } }),
    prisma.payment.aggregate({ where: { status: 'COMPLETED', createdAt: { gte: thisMonth } }, _sum: { amount: true } }),
    prisma.user.count({ where: { verificationStatus: 'PENDING' } }),
    prisma.booking.count({ where: { status: { in: ['PENDING', 'CONFIRMED'] } } }),
    prisma.user.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      include: { profile: true },
      select: { id: true, email: true, role: true, createdAt: true, profile: true },
    }),
    prisma.booking.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' },
      include: {
        fan: { include: { user: { include: { profile: true } } } },
        celebrity: { include: { user: { include: { profile: true } } } },
      },
    }),
  ]);

  res.json({
    stats: {
      users: { total: totalUsers, newThisMonth: newUsersThisMonth },
      celebrities: { total: totalCelebrities, verified: verifiedCelebrities },
      bookings: { total: totalBookings, thisMonth: monthlyBookings, active: activeBookings },
      revenue: {
        total: totalRevenue._sum.amount || 0,
        thisMonth: monthlyRevenue._sum.amount || 0,
      },
      pendingVerifications,
    },
    recentUsers,
    recentBookings,
  });
};

export const getUsers = async (req: AuthRequest, res: Response) => {
  const { role, status, search, page = '1', limit = '20' } = req.query;
  const skip = (parseInt(page as string) - 1) * parseInt(limit as string);

  const where: Record<string, unknown> = {};
  if (role) where.role = role;
  if (status) where.status = status;
  if (search) {
    where.OR = [
      { email: { contains: search, mode: 'insensitive' } },
      { profile: { firstName: { contains: search, mode: 'insensitive' } } },
      { profile: { lastName: { contains: search, mode: 'insensitive' } } },
    ];
  }

  const [users, total] = await Promise.all([
    prisma.user.findMany({
      where,
      skip,
      take: parseInt(limit as string),
      orderBy: { createdAt: 'desc' },
      include: { profile: true, wallet: true },
    }),
    prisma.user.count({ where }),
  ]);

  res.json({
    data: users.map(u => ({ ...u, passwordHash: undefined })),
    meta: { total, page: parseInt(page as string), pages: Math.ceil(total / parseInt(limit as string)) },
  });
};

export const updateUserStatus = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;

  const user = await prisma.user.update({
    where: { id },
    data: { status },
    select: { id: true, email: true, role: true, status: true },
  });

  if (status === 'SUSPENDED') {
    await prisma.session.deleteMany({ where: { userId: id } });
  }
  res.json(user);
};

export const verifyUser = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const { verificationStatus, note } = req.body;

  const user = await prisma.user.update({
    where: { id },
    data: { verificationStatus },
    select: { id: true, email: true, verificationStatus: true },
  });

  await prisma.notification.create({
    data: {
      userId: id,
      type: 'VERIFICATION_UPDATE',
      title: verificationStatus === 'VERIFIED' ? 'Hisob tasdiqlandi ✅' : 'Verifikatsiya rad etildi',
      body: note || (verificationStatus === 'VERIFIED'
        ? 'Tabriklaymiz! Hisobingiz muvaffaqiyatli tasdiqlandi.'
        : 'Kechirasiz, hisobingiz rad etildi.'),
    },
  });

  res.json(user);
};

export const getBookings = async (req: AuthRequest, res: Response) => {
  const { status, type, page = '1', limit = '20' } = req.query;
  const skip = (parseInt(page as string) - 1) * parseInt(limit as string);

  const where: Record<string, unknown> = {};
  if (status) where.status = status;
  if (type) where.type = type;

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
      },
    }),
    prisma.booking.count({ where }),
  ]);

  res.json({
    data: bookings,
    meta: { total, page: parseInt(page as string), pages: Math.ceil(total / parseInt(limit as string)) },
  });
};

export const getAnalytics = async (req: AuthRequest, res: Response) => {
  const { period = '30' } = req.query;
  const days = parseInt(period as string);
  const from = new Date(Date.now() - days * 24 * 60 * 60 * 1000);

  const [
    userGrowth, bookingsByType, revenueByDay,
    topCelebrities, platformRevenue,
  ] = await Promise.all([
    prisma.user.groupBy({
      by: ['role'],
      _count: true,
      where: { createdAt: { gte: from } },
    }),
    prisma.booking.groupBy({
      by: ['type'],
      _count: true,
      where: { createdAt: { gte: from } },
    }),
    prisma.payment.groupBy({
      by: ['createdAt'],
      _sum: { amount: true },
      where: { status: 'COMPLETED', createdAt: { gte: from } },
    }),
    prisma.celebrity.findMany({
      take: 10,
      orderBy: { totalEarnings: 'desc' },
      include: { user: { include: { profile: true } } },
    }),
    prisma.payment.aggregate({
      where: { status: 'COMPLETED', createdAt: { gte: from } },
      _sum: { amount: true },
    }),
  ]);

  res.json({
    userGrowth,
    bookingsByType,
    revenueByDay,
    topCelebrities,
    platformRevenue: (platformRevenue._sum.amount || 0) * 0.15,
  });
};

export const getContent = async (req: AuthRequest, res: Response) => {
  const { page = '1', limit = '20', type, isPublished } = req.query;
  const skip = (parseInt(page as string) - 1) * parseInt(limit as string);

  const where: Record<string, unknown> = {};
  if (type) where.type = type;
  if (isPublished !== undefined) where.isPublished = isPublished === 'true';

  const [content, total] = await Promise.all([
    prisma.content.findMany({
      where,
      skip,
      take: parseInt(limit as string),
      orderBy: { createdAt: 'desc' },
      include: { celebrity: { include: { user: { include: { profile: true } } } } },
    }),
    prisma.content.count({ where }),
  ]);

  res.json({
    data: content,
    meta: { total, page: parseInt(page as string), pages: Math.ceil(total / parseInt(limit as string)) },
  });
};

export const deleteContent = async (req: AuthRequest, res: Response) => {
  await prisma.content.delete({ where: { id: req.params.id } });
  res.json({ message: 'Kontent o\'chirildi' });
};
