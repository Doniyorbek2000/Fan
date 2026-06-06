import { Router } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { authenticate, requireCelebrity } from '../middleware/auth.middleware';
import { prisma } from '../utils/prisma';

export const contentRouter = Router();

contentRouter.get('/', asyncHandler(async (req, res) => {
  const { type, page = '1', limit = '20' } = req.query;
  const skip = (parseInt(page as string) - 1) * parseInt(limit as string);
  const where: any = { isPublished: true };
  if (type) where.type = type;
  const content = await prisma.content.findMany({
    where, skip, take: parseInt(limit as string),
    orderBy: { publishedAt: 'desc' },
    include: { celebrity: { include: { user: { include: { profile: true } } } } },
  });
  res.json(content);
}));

contentRouter.post('/', authenticate, requireCelebrity, asyncHandler(async (req: any, res) => {
  const celebrity = await prisma.celebrity.findUnique({ where: { userId: req.user.id } });
  const content = await prisma.content.create({
    data: { ...req.body, celebrityId: celebrity!.id },
  });
  res.status(201).json(content);
}));

contentRouter.patch('/:id/publish', authenticate, requireCelebrity, asyncHandler(async (req: any, res) => {
  const content = await prisma.content.update({
    where: { id: req.params.id },
    data: { isPublished: true, publishedAt: new Date() },
  });
  res.json(content);
}));

contentRouter.delete('/:id', authenticate, requireCelebrity, asyncHandler(async (req: any, res) => {
  await prisma.content.delete({ where: { id: req.params.id } });
  res.json({ message: 'Kontent o\'chirildi' });
}));
