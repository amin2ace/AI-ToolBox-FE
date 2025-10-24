// backend/src/controllers/UserController.ts
import { Request, Response } from 'express';

export const getPreferences = (req: Request, res: Response) => {
  res.send('Get user preferences endpoint');
};

export const updatePreferences = (req: Request, res: Response) => {
  res.send('Update user preferences endpoint');
};

export const getHistory = (req: Request, res: Response) => {
  res.send('Get user history endpoint');
};
