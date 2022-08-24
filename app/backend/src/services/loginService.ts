import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import User from '../database/models/user';
import 'dotenv/config';
import BadRequest from '../error/badresquest';
import Unauthorized from '../error/unauthorized';

const secret = process.env.JWT_SECRET || 'jwt_secret';

export default class LoginService {
  static findByEmail = async (email: string, password: string): Promise<string> => {
    if (!email || !password) {
      throw new BadRequest('All fields must be filled');
    }
    const regexValid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/g;
    const user = await User.findOne({ where: { email }, raw: true });
    if (!user || !regexValid.test(email) || password.length < 6) {
      throw new Unauthorized('Incorrect email or password');
    }
    const bcryptPass = await bcrypt.compare(password, user.password);
    if (!bcryptPass) {
      throw new Unauthorized('Incorrect email or password');
    }
    const { role, id } = user;
    const token = jwt.sign({ role, id }, secret);
    return token;
  };
}
