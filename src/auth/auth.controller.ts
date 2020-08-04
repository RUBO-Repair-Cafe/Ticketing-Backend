import { Controller, UseGuards, Post, Request, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/tickets/users/dto/user.entity';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { LoginDataDto } from './loginData.dto';
import { AuthService } from './auth.service';
import { JwtResponseDto } from './jwtReponse.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {

  constructor(private _authService: AuthService){}

  @UseGuards(AuthGuard('local'))
  @ApiOperation({ summary: 'Login a user' , description: 'Logs in the user with his credentials and then returns a JWT for further use with the API'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @Post('login')
  async login(@Body() loginData: LoginDataDto, @Request() req: {user: User}): Promise<JwtResponseDto>{
    return this._authService.login(req.user);
  }
}
