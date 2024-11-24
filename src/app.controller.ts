import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { DatabaseService } from './Database/database/database.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private readonly database:DatabaseService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('user')
  userCreation(
    @Body() userData:any
  ): any {
    if(!userData.name){
      return {error:'Please provide name!'};
    }
    if(!userData.loginName){
      return {error:'Please provide login name!'};
    }
    if(!userData.password){
      return {error:'Please provide password!'};
    }
    if(!userData.type){
      return {error:'Please provide type of User!'};
    }
    return this.database.saveUser(userData.name,userData.loginName,userData.password,userData.type);
  }
  @Get('userAll')
  getUsersAll(){
    return this.database.findAllUser();
  }
}
