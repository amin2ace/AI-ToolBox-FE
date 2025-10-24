// backend/src/controllers/ToolProxyController.ts
import { Request, Response } from 'express';

export const proxyRequest = (req: Request, res: Response) => {
  res.send('Tool proxy endpoint');
};
