import { Router } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { authenticate, requireCelebrity } from '../middleware/auth.middleware';
import { prisma } from '../utils/prisma';

export const liveStreamRouter = Router();

liveStreamRouter.get('/active', asyncHandler(async (_, res) => {
  const streams = await prisma.liveStream.findMany({
    where: { isLive: true },
    include: { celebrity: { include: { user: { include: { profile: true } } } } },
    orderBy: { viewerCount: 'desc' },
  });
  res.json(streams);
}));

liveStreamRouter.post('/', authenticate, requireCelebrity, asyncHandler(async (req: any, res) => {
  const celebrity = await prisma.celebrity.findUnique({ where: { userId: req.user.id } });
  const stream = await prisma.liveStream.create({
    data: { celebrityId: celebrity!.id, title: req.body.title, description: req.body.description, isPremium: req.body.isPremium || false },
  });
  res.status(201).json(stream);
}));

liveStreamRouter.patch('/:id/start', authenticate, requireCelebrity, asyncHandler(async (req: any, res) => {
  const stream = await prisma.liveStream.update({
    where: { id: req.params.id },
    data: { isLive: true, startedAt: new Date() },
  });
  res.json(stream);
}));

liveStreamRouter.patch('/:id/end', authenticate, requireCelebrity, asyncHandler(async (req: any, res) => {
  const stream = await prisma.liveStream.findUnique({ where: { id: req.params.id } });
  const duration = stream?.startedAt ? Math.floor((Date.now() - stream.startedAt.getTime()) / 1000) : 0;
  const updated = await prisma.liveStream.update({
    where: { id: req.params.id },
    data: { isLive: false, endedAt: new Date(), duration },
  });
  res.json(updated);
}));
