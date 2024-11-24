import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { databaseProviders } from './database.providers';
import { UserService } from '../User/user.service';
import { userProviders } from '../User/user.providers';

@Module({
  providers: [...databaseProviders,...userProviders,DatabaseService,UserService],
  imports: [],
  exports: [DatabaseService] 
})
export class DatabaseModule {}
