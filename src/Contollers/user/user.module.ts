import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/Database/database/database.module';
import { UserController } from './user.controller';
import { UserService } from 'src/Service/user/user.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { LocalStrategy } from 'src/Strategy/local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'src/Strategy/jwt.strategy';

@Module({
    imports: [DatabaseModule,ConfigModule.forRoot(),JwtModule.register({
        global: true,
        secret: process.env.JWT,
        signOptions: { expiresIn: process.env.EXPIRE },
      }),PassportModule],
    controllers:[UserController],
    providers:[UserService, LocalStrategy,JwtStrategy]
})
export class UserModule {}
