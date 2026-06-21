import { Router } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { authenticate, requireCelebrity } from '../middleware/auth.middleware';
import { listContent, createContent, publishContent, deleteContent } from '../controllers/content.controller';

export const contentRouter = Router();

contentRouter.get('/', asyncHandler(listContent));
contentRouter.post('/', authenticate, requireCelebrity, asyncHandler(createContent));
contentRouter.patch('/:id/publish', authenticate, requireCelebrity, asyncHandler(publishContent));
contentRouter.delete('/:id', authenticate, requireCelebrity, asyncHandler(deleteContent));
