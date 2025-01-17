
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/Service/user/user.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: UserService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.login(username, password);
    if (user) {
      return user;
    }
    throw new UnauthorizedException();
  }
}
