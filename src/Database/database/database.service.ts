import { Injectable } from '@nestjs/common';
import { UserService } from '../User/user.service';

@Injectable()
export class DatabaseService {
    constructor(private userServo:UserService){}

    saveUser(name:string,loginNane:string,pass:string,type:number):Promise<any>{
        if(name.length>256){
            throw new Error('Name max length 255!');
        }
        let msg = this.userServo.saveUser(name,loginNane,pass,type);
        return msg;
    }
    findAllUser(){
        return this.userServo.findAll();
    }
}
