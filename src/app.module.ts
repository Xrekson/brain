import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './Database/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './Modules/User/user.module';
import { JwtModule } from '@nestjs/jwt';
import { ItemModule } from './Modules/item/item.module';
import * as fs from 'fs';
import { join } from 'path';


@Module({
  imports: [DatabaseModule,JwtModule.register({
    global: true,
    // secret: process.env.JWT,
    privateKey: fs.readFileSync(join(__dirname, '..', 'keys', 'private.key')), // Private key path
    publicKey: fs.readFileSync(join(__dirname, '..', 'keys', 'public.key')),
    signOptions: { algorithm: 'RS256',expiresIn: process.env.EXPIRE },
  }),ConfigModule.forRoot(),UserModule,ItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
