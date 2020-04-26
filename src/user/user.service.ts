import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../interfaces/user.interface';

@Injectable()
export class UserService {

  constructor(
    @InjectModel('User') private userModel: Model<User>,
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    return this.userModel.findOne({username});
  }
}
