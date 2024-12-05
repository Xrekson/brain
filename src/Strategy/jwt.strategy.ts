
import { Strategy,ExtractJwt } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/Service/user/user.service';
import { join } from 'path';
import * as fs from 'fs';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: fs.readFileSync(join(__dirname, '../..', 'keys', 'public.key')), // Public key for verification
      algorithms: ['RS256'],
    });
  }

  async validate(payload) {
    return payload;
  }
}
