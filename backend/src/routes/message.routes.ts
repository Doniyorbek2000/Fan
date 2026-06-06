import { Router } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { authenticate } from '../middleware/auth.middleware';
import { prisma } from '../utils/prisma';

export const messageRouter = Router();
messageRouter.use(authenticate);

messageRouter.get('/conversations', asyncHandler(async (req: any, res) => {
  const conversations = await prisma.conversation.findMany({
    where: { OR: [{ fanId: req.user.id }, { celebrityId: req.user.id }] },
    orderBy: { lastMessageAt: 'desc' },
    include: {
      messages: { take: 1, orderBy: { createdAt: 'desc' } },
    },
  });
  res.json(conversations);
}));

messageRouter.get('/conversations/:id/messages', asyncHandler(async (req: any, res) => {
  const { page = '1', limit = '50' } = req.query;
  const skip = (parseInt(page) - 1) * parseInt(limit);
  const messages = await prisma.message.findMany({
    where: { conversationId: req.params.id },
    skip,
    take: parseInt(limit),
    orderBy: { createdAt: 'desc' },
    include: { sender: { include: { profile: true } } },
  });
  await prisma.message.updateMany({
    where: { conversationId: req.params.id, senderId: { not: req.user.id }, isRead: false },
    data: { isRead: true, readAt: new Date() },
  });
  res.json(messages.reverse());
}));

messageRouter.post('/conversations/:id/messages', asyncHandler(async (req: any, res) => {
  const { content, mediaUrl, mediaType, isPremium } = req.body;
  const message = await prisma.message.create({
    data: { conversationId: req.params.id, senderId: req.user.id, content, mediaUrl, mediaType, isPremium: isPremium || false },
    include: { sender: { include: { profile: true } } },
  });
  await prisma.conversation.update({
    where: { id: req.params.id },
    data: { lastMessage: content, lastMessageAt: new Date() },
  });
  res.status(201).json(message);
}));
