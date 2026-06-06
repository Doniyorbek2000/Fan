import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { prisma } from '../utils/prisma';
import { UserRole } from '@prisma/client';

export interface AuthRequest extends Request {
  user?: {
    id: string;
    email: string;
    role: UserRole;
  };
}

export const authenticate = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.replace('Bearer ', '');
    if (!token) return res.status(401).json({ error: 'Token taqdim etilmagan' });

    const payload = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
      select: { id: true, email: true, role: true, status: true },
    });

    if (!user) return res.status(401).json({ error: 'Foydalanuvchi topilmadi' });
    if (user.status === 'SUSPENDED') return res.status(403).json({ error: 'Hisob bloklangan' });

    req.user = user;
    next();
  } catch {
    return res.status(401).json({ error: 'Noto\'g\'ri token' });
  }
};

export const requireRole = (...roles: UserRole[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Ruxsat yo\'q' });
    }
    next();
  };
};

export const requireAdmin = requireRole(UserRole.ADMIN);
export const requireCelebrity = requireRole(UserRole.CELEBRITY, UserRole.ADMIN);
