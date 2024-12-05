import { Inject, Injectable } from '@nestjs/common';
import { ILike, Repository } from 'typeorm';
import { Item } from './item.entity';

@Injectable()
export class ItemsService {
    constructor(
        @Inject('ITEM_REPO')
        private itemRepo: Repository<Item>,
    ) { }
    async findAll(): Promise<Item[]> {
        return this.itemRepo.find();
    }
    async saveUser(name: string, description: string, detail: string, type: number): Promise<any> {
        let userDB = new Item();
        userDB.description = description;
        userDB.name = name;
        userDB.detail = detail;
        userDB.type = type;
        userDB.status = true;
        let result = await this.itemRepo.save(userDB);
        return result.id ? { status: "Product Creation Success!", id: result.id } : { status: "Product Creation Failed!" };
    }
    async searchBydata(name: string): Promise<Item[]> {
        let result = await this.itemRepo.findBy({
            name: ILike("%"+name+"%"),
            detail:ILike("%"+name+"%"),
        });
        return result;
    }

    async updateByID(id: number,updatedData:any): Promise<any> {
        let result = await this.itemRepo.findOne({
            where:{
                id: id
            }
        });
        if (result) {
            Object.assign(result, updatedData);
            return await this.itemRepo.save(result);
        } else {
            return { error: "Wrong DATA!" };
        }
    }
}
