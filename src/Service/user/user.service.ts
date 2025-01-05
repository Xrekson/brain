import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/Database/database/database.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
    userNameSet: Set<String>;
    constructor(private readonly database: DatabaseService,private jwtService: JwtService) {
        this.database.findAllUserName().then((data)=>{
            this.userNameSet = data;
        });
     }
    userCreation(
        userData: any
    ): any {
        if (!userData.name) {
            return { error: 'Please provide name!' };
        }
        if (!userData.loginName) {
            return { error: 'Please provide login name!' };
        }
        if (!userData.password) {
            return { error: 'Please provide password!' };
        }
        if (!userData.type) {
            return { error: 'Please provide type of User!' };
        }
        return this.database.saveUser(userData.name, userData.loginName, userData.password, userData.type);
    }
    getUsersAll() {
        return this.database.findAllUser();
    }
    getUserNamesCheck(loginName:String) {
        if(this.userNameSet){
            return !this.userNameSet.has(loginName.toLowerCase());
        }else{
            this.database.findAllUserName().then((data)=>{
                this.userNameSet = data;
            }).then(()=>{
                this.getUserNamesCheck(loginName);
            });
        }
    }
    getUserByUser(loginName:string,password:string) {
        return this.database.loginUser(loginName,password);
    }
    async login(loginName:string,password:string) {
        if (!loginName) {
            return { error: 'Please provide login name!' };
        }
        if (!password) {
            return { error: 'Please provide password!' };
        }
        let data = await this.database.loginUser(loginName, password);
        if(data){
            let payload = { sub: data.id, data: data.loginName };
            return {
                access_token: await this.jwtService.signAsync(payload),
              };
        }
        return {error:"Wrong Crendentials!"};
    }
    async logout(loginName:string,password:string) {
        if (!loginName) {
            return { error: 'Please provide login name!' };
        }
        if (!password) {
            return { error: 'Please provide password!' };
        }
        let data = await this.database.loginUser(loginName, password);
        if(data){
            let payload = { sub: data.id, data: data.loginName };
            return {
                access_token: await this.jwtService.signAsync(payload),
              };
        }
        return {error:"Wrong Crendentials!"};
    }
    updateUserByCred(updatedData: any){
        if (!updatedData.id) {
            return { error: 'Please provide ID!' };
        }
        if (!updatedData.pass) {
            return { error: 'Please provide password!' };
        }
        if (!updatedData) {
            return { error: 'Please provide info to update!' };
        }
        return this.database.updateUser(updatedData.id,updatedData.pass,updatedData);
    }
}
