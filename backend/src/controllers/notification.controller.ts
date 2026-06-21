import { Response } from 'express';
import { prisma } from '../utils/prisma';
import { AuthRequest } from '../middleware/auth.middleware';

export const getNotifications = async (req: AuthRequest, res: Response) => {
  const { page = '1', limit = '30' } = req.query;
  const skip = (parseInt(page as string) - 1) * parseInt(limit as string);
  const [notifications, unreadCount] = await Promise.all([
    prisma.notification.findMany({
      where: { userId: req.user!.id },
      skip, take: parseInt(limit as string),
      orderBy: { createdAt: 'desc' },
    }),
    prisma.notification.count({ where: { userId: req.user!.id, isRead: false } }),
  ]);
  res.json({ data: notifications, unreadCount });
};

export const markAllRead = async (req: AuthRequest, res: Response) => {
  await prisma.notification.updateMany({
    where: { userId: req.user!.id, isRead: false },
    data: { isRead: true, readAt: new Date() },
  });
  res.json({ message: 'Barchasi o\'qildi' });
};

export const markOneRead = async (req: AuthRequest, res: Response) => {
  await prisma.notification.update({
    where: { id: req.params.id },
    data: { isRead: true, readAt: new Date() },
  });
  res.json({ message: 'O\'qildi' });
};
