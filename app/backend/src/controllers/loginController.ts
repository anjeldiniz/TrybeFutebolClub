import { Request, Response } from 'express';
import LoginService from '../services/loginService';

export default class loginController {
  static login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const token = await LoginService.findByEmail(email, password);
    res.status(200).json({ token });
  }
}