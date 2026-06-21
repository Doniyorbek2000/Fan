import { Router } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { authenticate, requireCelebrity } from '../middleware/auth.middleware';
import { getActiveStreams, createStream, startStream, endStream } from '../controllers/livestream.controller';

export const liveStreamRouter = Router();

liveStreamRouter.get('/active', asyncHandler(getActiveStreams));
liveStreamRouter.post('/', authenticate, requireCelebrity, asyncHandler(createStream));
liveStreamRouter.patch('/:id/start', authenticate, requireCelebrity, asyncHandler(startStream));
liveStreamRouter.patch('/:id/end', authenticate, requireCelebrity, asyncHandler(endStream));
