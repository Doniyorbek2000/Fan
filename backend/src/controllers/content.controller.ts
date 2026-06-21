import { Request, Response } from 'express';
import { prisma } from '../utils/prisma';
import { AuthRequest } from '../middleware/auth.middleware';

export const listContent = async (req: Request, res: Response) => {
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
};

export const createContent = async (req: AuthRequest, res: Response) => {
  const celebrity = await prisma.celebrity.findUnique({ where: { userId: req.user!.id } });
  const content = await prisma.content.create({
    data: { ...req.body, celebrityId: celebrity!.id },
  });
  res.status(201).json(content);
};

export const publishContent = async (req: AuthRequest, res: Response) => {
  const content = await prisma.content.update({
    where: { id: req.params.id },
    data: { isPublished: true, publishedAt: new Date() },
  });
  res.json(content);
};

export const deleteContent = async (req: AuthRequest, res: Response) => {
  await prisma.content.delete({ where: { id: req.params.id } });
  res.json({ message: 'Kontent o\'chirildi' });
};
