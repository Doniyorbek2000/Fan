import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { createServer } from 'http';
import { Server as SocketServer } from 'socket.io';
import 'dotenv/config';

import { authRouter } from './routes/auth.routes';
import { userRouter } from './routes/user.routes';
import { celebrityRouter } from './routes/celebrity.routes';
import { bookingRouter } from './routes/booking.routes';
import { messageRouter } from './routes/message.routes';
import { paymentRouter } from './routes/payment.routes';
import { notificationRouter } from './routes/notification.routes';
import { adminRouter } from './routes/admin.routes';
import { liveStreamRouter } from './routes/livestream.routes';
import { contentRouter } from './routes/content.routes';
import { analyticsRouter } from './routes/analytics.routes';
import { walletRouter } from './routes/wallet.routes';
import { setupSocketHandlers } from './services/socket.service';
import { errorHandler } from './middleware/error.middleware';
import { rateLimiter } from './middleware/rateLimit.middleware';

const app = express();
const httpServer = createServer(app);

export const io = new SocketServer(httpServer, {
  cors: {
    origin: process.env.CLIENT_URLS?.split(',') || ['http://localhost:3000', 'http://localhost:3001'],
    methods: ['GET', 'POST'],
    credentials: true,
  },
});

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URLS?.split(',') || ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true,
}));
app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use('/api', rateLimiter);

// Health check
app.get('/health', (_, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString(), version: '1.0.0' });
});

// API Routes
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/celebrities', celebrityRouter);
app.use('/api/bookings', bookingRouter);
app.use('/api/messages', messageRouter);
app.use('/api/payments', paymentRouter);
app.use('/api/notifications', notificationRouter);
app.use('/api/admin', adminRouter);
app.use('/api/live-streams', liveStreamRouter);
app.use('/api/content', contentRouter);
app.use('/api/analytics', analyticsRouter);
app.use('/api/wallet', walletRouter);

// Socket.IO
setupSocketHandlers(io);

// Error handling
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, () => {
  console.log(`🚀 FanMeet API running on port ${PORT}`);
  console.log(`📊 Environment: ${process.env.NODE_ENV || 'development'}`);
});

export default app;
