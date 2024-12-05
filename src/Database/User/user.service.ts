
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
  async saveUser(name:string,loginName:string,pass:string,type:number): Promise<any> {
    let userDB = new User();
    userDB.loginName = loginName;
    userDB.name = name;
    userDB.password = pass;
    userDB.type = type;
    userDB.status = true;
    let result = await this.userRepo.save(userDB);
    return result.id?{status:"User Creation Success!",id:result.id}:{status:"User Creation Failed!"};
  }
  async findByCred(loginName:string,pass:string): Promise<User> {
    let result = await this.userRepo.createQueryBuilder('users')
    .where("users.loginName = :loginName", { loginName: loginName })
    .andWhere("users.password = :password", { password: pass })
    .getOne();
    return result;
  }

  async updateByCred(id:number,pass:string,updatedData: any): Promise<any> {
    let result = await this.userRepo.createQueryBuilder('users')
    .where("users.id = :id", { id: id })
    .andWhere("users.password = :password", { password: pass })
    .getOne();

    if(result){
      Object.assign(result,updatedData);
      return await this.userRepo.save(result);
    }else{
      return {error:"Wrong Crendentials!"};
    }
  }
}
