import { Router } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { authenticate } from '../middleware/auth.middleware';
import { createBooking, getMyBookings, updateBookingStatus, cancelBooking } from '../controllers/booking.controller';

export const bookingRouter = Router();

bookingRouter.use(authenticate);
bookingRouter.post('/', asyncHandler(createBooking));
bookingRouter.get('/my', asyncHandler(getMyBookings));
bookingRouter.patch('/:id/status', asyncHandler(updateBookingStatus));
bookingRouter.post('/:id/cancel', asyncHandler(cancelBooking));
