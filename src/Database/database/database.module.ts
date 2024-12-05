import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { databaseProviders } from './database.providers';
import { UserService } from '../User/user.service';
import { userProviders } from '../User/user.providers';
import { itemProviders } from '../items/item.providers';
import { ItemsService } from '../items/items.service';

@Module({
  providers: [...databaseProviders,...userProviders,...itemProviders,DatabaseService,UserService,ItemsService],
  imports: [],
  exports: [DatabaseService] 
})
export class DatabaseModule {}
