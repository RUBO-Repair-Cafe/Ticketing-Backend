import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/tickets/users/users.service';
import { compare } from 'bcrypt';
import { User } from 'src/tickets/users/dto/user.entity';
import { JwtService } from '@nestjs/jwt';
import { JwtResponseDto } from './jwtReponse.dto';

@Injectable()
export class AuthService {
  constructor(
    private _usersService: UsersService,
    private _jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this._usersService.getOneWithPassword(username);
    if (user && await compare(pass, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User): Promise<JwtResponseDto> {
    const payload = { username: user.username, sub: user.userId, firstName: user.firstName, lastName: user.lastName };
    return {
      access_token: this._jwtService.sign(payload),
    };
  }
}
