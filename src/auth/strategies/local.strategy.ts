import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from "../auth.service";
import { User } from "src/tickets/users/dto/user.entity";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
  constructor(private _authService: AuthService){ super(); }

  async validate(username: string, password: string): Promise<User>{
    const user = await this._authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}