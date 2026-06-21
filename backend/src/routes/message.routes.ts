import { Router } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { authenticate } from '../middleware/auth.middleware';
import { getConversations, getMessages, sendMessage } from '../controllers/message.controller';

export const messageRouter = Router();
messageRouter.use(authenticate);

messageRouter.get('/conversations', asyncHandler(getConversations));
messageRouter.get('/conversations/:id/messages', asyncHandler(getMessages));
messageRouter.post('/conversations/:id/messages', asyncHandler(sendMessage));
