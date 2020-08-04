import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { NewUserDto } from './dto/newUser.dto';
import { User } from './dto/user.entity';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('users')
@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private _usersService: UsersService){}

  @Post()
  @ApiOperation({ summary: 'Create a new User' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  createUser(@Body() newUserData: NewUserDto): Promise<User> {
    return this._usersService.createUser(newUserData);
  }
}
