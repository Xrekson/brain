import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './Database/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './Contollers/user/user.module';

@Module({
  imports: [DatabaseModule,ConfigModule.forRoot(),UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
