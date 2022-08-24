
import { IUser } from './../interfaces/index';

class UserService {

  constructor (private validator: any) {
    this.validator = validator;
  }

  async register (payload: IUser) {
    this.validator.email(payload.email);

    // console.log(isValidEmail);
    // console.log(payload);
    
  }
}

export default UserService;