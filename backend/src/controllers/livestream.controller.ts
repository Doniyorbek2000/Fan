import { Request, Response } from 'express';
import { prisma } from '../utils/prisma';
import { AuthRequest } from '../middleware/auth.middleware';

export const getActiveStreams = async (_req: Request, res: Response) => {
  const streams = await prisma.liveStream.findMany({
    where: { isLive: true },
    include: { celebrity: { include: { user: { include: { profile: true } } } } },
    orderBy: { viewerCount: 'desc' },
  });
  res.json(streams);
};

export const createStream = async (req: AuthRequest, res: Response) => {
  const celebrity = await prisma.celebrity.findUnique({ where: { userId: req.user!.id } });
  const stream = await prisma.liveStream.create({
    data: { celebrityId: celebrity!.id, title: req.body.title, description: req.body.description, isPremium: req.body.isPremium || false },
  });
  res.status(201).json(stream);
};

export const startStream = async (req: AuthRequest, res: Response) => {
  const stream = await prisma.liveStream.update({
    where: { id: req.params.id },
    data: { isLive: true, startedAt: new Date() },
  });
  res.json(stream);
};

export const endStream = async (req: AuthRequest, res: Response) => {
  const stream = await prisma.liveStream.findUnique({ where: { id: req.params.id } });
  const duration = stream?.startedAt ? Math.floor((Date.now() - stream.startedAt.getTime()) / 1000) : 0;
  const updated = await prisma.liveStream.update({
    where: { id: req.params.id },
    data: { isLive: false, endedAt: new Date(), duration },
  });
  res.json(updated);
};
