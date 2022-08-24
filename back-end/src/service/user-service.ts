import { decode } from 'jsonwebtoken';
import generateToken from '../tools/tokenGenerator';
import { IUser } from './../interfaces/index';

class UserService {

  constructor (private validator: any) {
    this.validator = validator;
  }

  async register (payload: IUser) {
    this.validator.isValidRegister(payload);
    const { name, email } = payload;

    const token = generateToken({ name, email } as IUser)
    return token;   
  }
}

export default UserService;