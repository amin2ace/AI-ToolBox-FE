// backend/src/controllers/AuthController.ts
import { Request, Response } from 'express';

export const login = (req: Request, res: Response) => {
  res.send('Login endpoint');
};

export const logout = (req: Request, res: Response) => {
  res.send('Logout endpoint');
};
