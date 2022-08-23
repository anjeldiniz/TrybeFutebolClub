import * as jwt from 'jsonwebtoken';
import  User  from '../database/models/user';
import 'dotenv/config';
import BadRequest from '../error/badresquest';
import Unauthorized from '../error/unauthorized';

const secret = process.env.JWT_SECRET || 'jwt_secret';

export default class LoginService {
  static findByEmail = async (email: string, password: string): Promise<string> => {
    if (!email || !password) {
      throw new BadRequest('All fields must be filled');
    }
    const regexValid = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!regexValid.test(email) || password.length < 6 ) {
      throw new Unauthorized('Incorrect email or password');
    }
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new Error();
    }
    const { role, id } = user;
    const token = jwt.sign({ role, id }, secret);
    return token;
  }
}