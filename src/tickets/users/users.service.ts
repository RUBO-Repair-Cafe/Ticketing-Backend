import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './dto/user.entity';
import { Repository } from 'typeorm';
import { NewUserDto } from './dto/newUser.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private _userRepo: Repository<User>) {}

  getOneWithPassword(username: string): Promise<User> {
    return this._userRepo
      .createQueryBuilder('user')
      .addSelect('user.password')
      .where('user.username = :username', { username })
      .getOne();
  }

  async createUser(newUserData: NewUserDto): Promise<User>{
    const userData = this._userRepo.create(newUserData);
    userData.password = await hash(userData.password, 10);
    return this._userRepo.save(userData);
  }
}
