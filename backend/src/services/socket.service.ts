import { Server, Socket } from 'socket.io';
import jwt from 'jsonwebtoken';

interface AuthSocket extends Socket {
  userId?: string;
}

export const setupSocketHandlers = (io: Server) => {
  io.use((socket: AuthSocket, next) => {
    const token = socket.handshake.auth.token;
    if (!token) return next(new Error('Autentifikatsiya xatosi'));
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
      socket.userId = payload.userId;
      next();
    } catch {
      next(new Error('Noto\'g\'ri token'));
    }
  });

  io.on('connection', (socket: AuthSocket) => {
    console.log(`User connected: ${socket.userId}`);

    if (socket.userId) {
      socket.join(`user:${socket.userId}`);
    }

    socket.on('join:conversation', (conversationId: string) => {
      socket.join(`conversation:${conversationId}`);
    });

    socket.on('leave:conversation', (conversationId: string) => {
      socket.leave(`conversation:${conversationId}`);
    });

    socket.on('message:send', (data: { conversationId: string; message: unknown }) => {
      io.to(`conversation:${data.conversationId}`).emit('message:new', data.message);
    });

    socket.on('message:typing', (data: { conversationId: string; isTyping: boolean }) => {
      socket.to(`conversation:${data.conversationId}`).emit('message:typing', {
        userId: socket.userId,
        isTyping: data.isTyping,
      });
    });

    socket.on('livestream:join', (streamId: string) => {
      socket.join(`stream:${streamId}`);
      io.to(`stream:${streamId}`).emit('livestream:viewerCount', {
        streamId,
        count: io.sockets.adapter.rooms.get(`stream:${streamId}`)?.size || 0,
      });
    });

    socket.on('livestream:comment', (data: { streamId: string; comment: unknown }) => {
      io.to(`stream:${data.streamId}`).emit('livestream:newComment', data.comment);
    });

    socket.on('disconnect', () => {
      console.log(`User disconnected: ${socket.userId}`);
    });
  });
};
