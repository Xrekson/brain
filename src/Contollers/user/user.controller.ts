import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { UserService } from 'src/Service/user/user.service';
import { JwtGuard } from 'src/Guards/jwt.guard';
import { LocalGuard } from 'src/Guards/local.guard';
import { Request } from 'express';


@Controller('user')
export class UserController {
    constructor(private readonly userServo: UserService) { }
    @Post('add')
    userCreation(
        @Body() userData: any
    ): any {
        return this.userServo.userCreation(userData);
    }
    @UseGuards(JwtGuard)
    @Get('master')
    getUsersAll() {
        return this.userServo.getUsersAll();
    }
    @UseGuards(LocalGuard)
    @Post('login')
    login(@Req() req: Request) {
        // let data = this.userServo.login(userData);
        // return data;
        return req.user;
    }
}