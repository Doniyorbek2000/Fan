import { Router } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { authenticate } from '../middleware/auth.middleware';
import { getPaymentHistory, deposit, withdraw } from '../controllers/payment.controller';

export const paymentRouter = Router();
paymentRouter.use(authenticate);

paymentRouter.get('/history', asyncHandler(getPaymentHistory));
paymentRouter.post('/deposit', asyncHandler(deposit));
paymentRouter.post('/withdraw', asyncHandler(withdraw));
