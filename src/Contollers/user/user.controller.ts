import { Body, Controller, Get, Post, Put, Req, UseGuards } from '@nestjs/common';
import { UserService } from 'src/Service/user/user.service';
import { JwtGuard } from 'src/Guards/jwt.guard';
import { LocalGuard } from 'src/Guards/local.guard';
import { Request } from 'express';


@Controller('user')
export class UserController {
    constructor(private readonly userServo: UserService) { }
    @Post('create')
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
        return req.user;
    }

    @UseGuards(JwtGuard)
    @Post('userChk')
    userCheck(@Req() req: Request) {
        return { check:this.userServo.getUserNamesCheck(req.body.loginName)};
    }

    @UseGuards(JwtGuard)
    @Put('updateUser')
    update(@Body() userData: any) {
        return this.userServo.updateUserByCred(userData);
    }
}
