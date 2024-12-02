import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/Database/database/database.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
    constructor(private readonly database: DatabaseService,private jwtService: JwtService) { }
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
    getUserByUser(loginName:string,password:string) {
        return this.database.Login(loginName,password);
    }
    async login(loginName:string,password:string) {
        if (!loginName) {
            return { error: 'Please provide login name!' };
        }
        if (!password) {
            return { error: 'Please provide password!' };
        }
        let data = await this.database.Login(loginName, password);
        let payload = { sub: data.id, data: data.loginNane };
        return {
            access_token: await this.jwtService.signAsync(payload),
          };
    }
}
