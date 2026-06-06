import { Response } from 'express';
import { prisma } from '../utils/prisma';
import { AuthRequest } from '../middleware/auth.middleware';
import { AppError } from '../middleware/error.middleware';

export const getCelebrities = async (req: AuthRequest, res: Response) => {
  const { category, search, page = '1', limit = '20', sort = 'rating' } = req.query;
  const skip = (parseInt(page as string) - 1) * parseInt(limit as string);

  const where: Record<string, unknown> = {};
  if (category) where.category = category;
  if (search) {
    where.user = {
      profile: {
        OR: [
          { firstName: { contains: search, mode: 'insensitive' } },
          { lastName: { contains: search, mode: 'insensitive' } },
          { displayName: { contains: search, mode: 'insensitive' } },
        ],
      },
    };
  }

  const orderBy: Record<string, string> = {};
  if (sort === 'rating') orderBy.rating = 'desc';
  else if (sort === 'bookings') orderBy.totalBookings = 'desc';
  else if (sort === 'newest') orderBy.createdAt = 'desc';

  const [celebrities, total] = await Promise.all([
    prisma.celebrity.findMany({
      where,
      skip,
      take: parseInt(limit as string),
      orderBy,
      include: {
        user: { include: { profile: true } },
        services: { where: { isActive: true } },
      },
    }),
    prisma.celebrity.count({ where }),
  ]);

  res.json({
    data: celebrities,
    meta: {
      total,
      page: parseInt(page as string),
      limit: parseInt(limit as string),
      pages: Math.ceil(total / parseInt(limit as string)),
    },
  });
};

export const getCelebrity = async (req: AuthRequest, res: Response) => {
  const celebrity = await prisma.celebrity.findUnique({
    where: { id: req.params.id },
    include: {
      user: { include: { profile: true } },
      services: { where: { isActive: true } },
      reviews: {
        take: 10,
        orderBy: { createdAt: 'desc' },
        include: { fan: { include: { user: { include: { profile: true } } } } },
      },
    },
  });
  if (!celebrity) throw new AppError(404, 'Mashhur topilmadi');
  res.json(celebrity);
};

export const getMyCelebrityProfile = async (req: AuthRequest, res: Response) => {
  const celebrity = await prisma.celebrity.findUnique({
    where: { userId: req.user!.id },
    include: {
      user: { include: { profile: true } },
      services: true,
      _count: { select: { bookings: true, reviews: true } },
    },
  });
  if (!celebrity) throw new AppError(404, 'Profil topilmadi');
  res.json(celebrity);
};

export const updateCelebrityProfile = async (req: AuthRequest, res: Response) => {
  const { category, isAvailable, responseTime, bio, displayName, avatarUrl, coverUrl } = req.body;

  const updated = await prisma.$transaction([
    prisma.celebrity.update({
      where: { userId: req.user!.id },
      data: { category, isAvailable, responseTime },
    }),
    prisma.profile.update({
      where: { userId: req.user!.id },
      data: { bio, displayName, avatarUrl, coverUrl },
    }),
  ]);
  res.json(updated[0]);
};

export const updateCelebrityServices = async (req: AuthRequest, res: Response) => {
  const celebrity = await prisma.celebrity.findUnique({ where: { userId: req.user!.id } });
  if (!celebrity) throw new AppError(404, 'Mashhur topilmadi');

  await prisma.celebrityService.deleteMany({ where: { celebrityId: celebrity.id } });

  const services = await prisma.celebrityService.createMany({
    data: req.body.services.map((s: Record<string, unknown>) => ({
      ...s,
      celebrityId: celebrity.id,
    })),
  });
  res.json(services);
};

export const getCelebrityStats = async (req: AuthRequest, res: Response) => {
  const celebrity = await prisma.celebrity.findUnique({ where: { userId: req.user!.id } });
  if (!celebrity) throw new AppError(404, 'Mashhur topilmadi');

  const now = new Date();
  const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  const [totalBookings, monthlyBookings, pendingBookings, recentReviews] = await Promise.all([
    prisma.booking.count({ where: { celebrityId: celebrity.id, status: 'COMPLETED' } }),
    prisma.booking.count({ where: { celebrityId: celebrity.id, createdAt: { gte: thisMonth } } }),
    prisma.booking.count({ where: { celebrityId: celebrity.id, status: 'PENDING' } }),
    prisma.review.findMany({
      where: { celebrityId: celebrity.id },
      take: 5,
      orderBy: { createdAt: 'desc' },
      include: { fan: { include: { user: { include: { profile: true } } } } },
    }),
  ]);

  res.json({
    totalBookings,
    monthlyBookings,
    pendingBookings,
    totalEarnings: celebrity.totalEarnings,
    monthlyEarnings: celebrity.monthlyEarnings,
    rating: celebrity.rating,
    totalReviews: celebrity.totalReviews,
    recentReviews,
  });
};
