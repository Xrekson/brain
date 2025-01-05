import { Body, Controller, Delete, Get, Post, Put, Req, UseGuards } from '@nestjs/common';
import { UserService } from 'src/Database/User/user.service';
import { JwtGuard } from 'src/Guards/jwt.guard';
import { LocalGuard } from 'src/Guards/local.guard';
import { ItemsService } from 'src/Service/items/items.service';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemServo: ItemsService) { }
    @UseGuards(JwtGuard)
    @Post('create')
    userCreation(
        @Body() userData: any
    ): any {
        return this.itemServo.itemCreation(userData);
    }

    @UseGuards(JwtGuard)
    @Get('master')
    getUsersAll() {
        return this.itemServo.getItemAll();
    }
    @UseGuards(JwtGuard)
    @Put('updateItem')
    update(@Body() userData: any) {
        return this.itemServo.updateItemByID(userData);
    }
    @UseGuards(JwtGuard)
    @Delete('deleteItem')
    delete(@Body() userData: any) {
        return this.itemServo.deleteItemByID(userData);
    }
}
