import { Response } from 'express';
import { prisma } from '../utils/prisma';
import { AuthRequest } from '../middleware/auth.middleware';

export const getConversations = async (req: AuthRequest, res: Response) => {
  const conversations = await prisma.conversation.findMany({
    where: { OR: [{ fanId: req.user!.id }, { celebrityId: req.user!.id }] },
    orderBy: { lastMessageAt: 'desc' },
    include: {
      messages: { take: 1, orderBy: { createdAt: 'desc' } },
    },
  });
  res.json(conversations);
};

export const getMessages = async (req: AuthRequest, res: Response) => {
  const { page = '1', limit = '50' } = req.query;
  const skip = (parseInt(page as string) - 1) * parseInt(limit as string);
  const messages = await prisma.message.findMany({
    where: { conversationId: req.params.id },
    skip,
    take: parseInt(limit as string),
    orderBy: { createdAt: 'desc' },
    include: { sender: { include: { profile: true } } },
  });
  await prisma.message.updateMany({
    where: { conversationId: req.params.id, senderId: { not: req.user!.id }, isRead: false },
    data: { isRead: true, readAt: new Date() },
  });
  res.json(messages.reverse());
};

export const sendMessage = async (req: AuthRequest, res: Response) => {
  const { content, mediaUrl, mediaType, isPremium } = req.body;
  const message = await prisma.message.create({
    data: { conversationId: req.params.id, senderId: req.user!.id, content, mediaUrl, mediaType, isPremium: isPremium || false },
    include: { sender: { include: { profile: true } } },
  });
  await prisma.conversation.update({
    where: { id: req.params.id },
    data: { lastMessage: content, lastMessageAt: new Date() },
  });
  res.status(201).json(message);
};
