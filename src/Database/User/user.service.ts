
import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPO')
    private userRepo: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepo.find();
  }
  async saveUser(name:string,loginNane:string,pass:string,type:number): Promise<any> {
    let userDB = new User();
    userDB.loginNane = loginNane;
    userDB.name = name;
    userDB.password = pass;
    userDB.type = type;
    userDB.status = true;
    let result = await this.userRepo.save(userDB);
    return result.id?{status:"User Creation Success!",id:result.id}:{status:"User Creation Failed!"};
  }
}
