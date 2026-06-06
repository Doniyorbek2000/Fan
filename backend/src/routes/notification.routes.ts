import { Router } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { authenticate } from '../middleware/auth.middleware';
import { prisma } from '../utils/prisma';

export const notificationRouter = Router();
notificationRouter.use(authenticate);

notificationRouter.get('/', asyncHandler(async (req: any, res) => {
  const { page = '1', limit = '30' } = req.query;
  const skip = (parseInt(page) - 1) * parseInt(limit);
  const [notifications, unreadCount] = await Promise.all([
    prisma.notification.findMany({
      where: { userId: req.user.id },
      skip, take: parseInt(limit),
      orderBy: { createdAt: 'desc' },
    }),
    prisma.notification.count({ where: { userId: req.user.id, isRead: false } }),
  ]);
  res.json({ data: notifications, unreadCount });
}));

notificationRouter.patch('/read-all', asyncHandler(async (req: any, res) => {
  await prisma.notification.updateMany({
    where: { userId: req.user.id, isRead: false },
    data: { isRead: true, readAt: new Date() },
  });
  res.json({ message: 'Barchasi o\'qildi' });
}));

notificationRouter.patch('/:id/read', asyncHandler(async (req: any, res) => {
  await prisma.notification.update({
    where: { id: req.params.id },
    data: { isRead: true, readAt: new Date() },
  });
  res.json({ message: 'O\'qildi' });
}));
