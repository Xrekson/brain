import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/Database/database/database.service';

@Injectable()
export class ItemsService {
    constructor(private readonly database: DatabaseService) { }
    itemCreation(
        userData: any
    ): any {
        if (!userData.name) {
            return { error: 'Please provide name!' };
        }
        if (!userData.description) {
            return { error: 'Please provide description!' };
        }
        if (!userData.detail) {
            return { error: 'Please provide detail!' };
        }
        if (!userData.type) {
            return { error: 'Please provide type of Item!' };
        }
        return this.database.saveItem(userData.name, userData.description, userData.detail, userData.type);
    }
    getItemAll() {
        return this.database.findAllItem();
    }
    getSearchedItem(name:string) {
        return this.database.searchItem(name);
    }
    // async login(name:string,) {
    //     if (name.trim().length==0) {
    //         return { error: 'Please provide value to search!' };
    //     }
    //     let data = await this.database.loginUser(loginName, password);
    //     if(data){
    //         let payload = { sub: data.id, data: data.loginName };
    //         return {
    //             access_token: await this.jwtService.signAsync(payload),
    //           };
    //     }
    //     return {error:"Wrong Crendentials!"};
    // }
    updateItemByID(updatedData: any){
        if (!updatedData.id) {
            return { error: 'Please provide ID!' };
        }
        if (!updatedData) {
            return { error: 'Please provide info to update!' };
        }
        return this.database.updateItem(updatedData.id,updatedData);
    }
    deleteItemByID(updatedData: any){
        if (!updatedData.id) {
            return { error: 'Please provide ID!' };
        }
        return this.database.deleteItem(updatedData.id);
    }
}
