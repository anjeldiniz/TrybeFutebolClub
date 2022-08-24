import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { Request, Response } from 'express';
import TokenUnauthorized from '../error/tokenUnauthorized';

dotenv.config();
const secret = process.env.JWT_SECRET || 'jwt_secret';

export default class ValidateToken {
  static validate = async (req: Request, res: Response): Promise<void> => {
    const { authorization } = req.headers;
    if (!authorization) {
      throw new TokenUnauthorized('Incorrect token');
    }
    const data = jwt.verify(authorization, secret) as { data: jwt.JwtPayload };
    const { role } = JSON.parse(JSON.stringify(data));
    if (!role) {
      throw new TokenUnauthorized('Incorrect token');
    }
    res.status(200).json({ role });
  };
}
