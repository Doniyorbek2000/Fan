import { Router } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { authenticate, requireCelebrity } from '../middleware/auth.middleware';
import { prisma } from '../utils/prisma';

export const analyticsRouter = Router();
analyticsRouter.use(authenticate, requireCelebrity);

analyticsRouter.get('/overview', asyncHandler(async (req: any, res) => {
  const celebrity = await prisma.celebrity.findUnique({ where: { userId: req.user.id } });
  if (!celebrity) return res.status(404).json({ error: 'Topilmadi' });

  const now = new Date();
  const thisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);

  const [bookingsByType, monthlyEarnings, lastMonthEarnings, reviewStats] = await Promise.all([
    prisma.booking.groupBy({
      by: ['type'],
      where: { celebrityId: celebrity.id },
      _count: true,
    }),
    prisma.payment.aggregate({
      where: { booking: { celebrityId: celebrity.id, status: 'COMPLETED' }, createdAt: { gte: thisMonth } },
      _sum: { amount: true },
    }),
    prisma.payment.aggregate({
      where: { booking: { celebrityId: celebrity.id, status: 'COMPLETED' }, createdAt: { gte: lastMonth, lt: thisMonth } },
      _sum: { amount: true },
    }),
    prisma.review.aggregate({
      where: { celebrityId: celebrity.id },
      _avg: { rating: true },
      _count: true,
    }),
  ]);

  const thisMonthEarnings = monthlyEarnings._sum.amount || 0;
  const prevMonthEarnings = lastMonthEarnings._sum.amount || 0;
  const growthPercent = prevMonthEarnings > 0
    ? ((thisMonthEarnings - prevMonthEarnings) / prevMonthEarnings * 100).toFixed(1)
    : null;

  res.json({
    celebrity,
    bookingsByType,
    earnings: {
      thisMonth: thisMonthEarnings,
      lastMonth: prevMonthEarnings,
      growth: growthPercent,
    },
    reviews: {
      average: reviewStats._avg.rating,
      count: reviewStats._count,
    },
  });
}));
