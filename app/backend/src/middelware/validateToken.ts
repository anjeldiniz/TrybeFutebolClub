import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';
import TokenUnauthorized from '../error/tokenUnauthorized';

dotenv.config();
const secret = process.env.JWT_SECRET || 'jwt_secret';

export default class ValidateToken {
  static validate = async (req: Request, res: Response): Promise<void> => {
    const { authorization } = req.headers;
    try {
      const data = jwt.verify(authorization as string, secret) as { data: jwt.JwtPayload };
      const { role } = JSON.parse(JSON.stringify(data));
      res.status(200).json({ role });
    } catch (_error) {
      throw new TokenUnauthorized('Incorrect token');
    }
  };

  static validateT = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { authorization } = req.headers;
    try {
      jwt.verify(authorization as string, secret);
      next();
    } catch (_error) {
      throw new TokenUnauthorized('Incorrect token');
    }
  };
}
