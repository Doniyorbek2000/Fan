import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET!;
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET!;

export const signAccessToken = (userId: string) =>
  jwt.sign({ userId }, SECRET, { expiresIn: '15m' });

export const signRefreshToken = (userId: string) =>
  jwt.sign({ userId }, REFRESH_SECRET, { expiresIn: '30d' });

export const verifyAccessToken = (token: string) =>
  jwt.verify(token, SECRET) as { userId: string };

export const verifyRefreshToken = (token: string) =>
  jwt.verify(token, REFRESH_SECRET) as { userId: string };
