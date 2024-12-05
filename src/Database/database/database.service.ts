import { Injectable } from '@nestjs/common';
import { UserService } from '../User/user.service';
import { ItemsService } from '../items/items.service';

@Injectable()
export class DatabaseService {
    constructor(private userServo:UserService,private itemServo:ItemsService){}

    saveUser(name:string,loginName:string,pass:string,type:number):Promise<any>{
        if(name.length>256){
            throw new Error('Name max length 255!');
        }
        let msg = this.userServo.saveUser(name,loginName,pass,type);
        return msg;
    }
    findAllUser(){
        return this.userServo.findAll();
    }
    loginUser(loginName:string,pass:string):Promise<any>{
        return this.userServo.findByCred(loginName,pass);
    }
    updateUser(id:number,pass:string,updatedData: any):Promise<any>{
        return this.userServo.updateByCred(id,pass,updatedData);
    }

    saveItem(name:string,description:string,detail:string,type:number):Promise<any>{
        if(name.length>256){
            throw new Error('Name max length 255!');
        }
        let msg = this.itemServo.saveUser(name,description,detail,type);
        return msg;
    }
    findAllItem(){
        return this.itemServo.findAll();
    }
    searchItem(name:string):Promise<any>{
        return this.itemServo.searchBydata(name);
    }
    updateItem(id:number,updatedData: any):Promise<any>{
        return this.itemServo.updateByID(id,updatedData);
    }

}
