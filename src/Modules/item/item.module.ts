import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ItemsController } from 'src/Contollers/items/items.controller';
import { DatabaseModule } from 'src/Database/database/database.module';
import { ItemsService } from 'src/Service/items/items.service';

@Module({
    imports: [DatabaseModule,ConfigModule.forRoot()],
    controllers:[ItemsController],
    providers:[ItemsService]
})
export class ItemModule {}
