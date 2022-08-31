import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUserRepository } from 'src/auth/domain/user.repository';
import { RegisterUserDTO } from '../dto/auth.dto';
import { User, UserDocument } from '../model/user.model';

@Injectable()
export class UserReposity implements IUserRepository {
  constructor(@InjectModel(User.name) private UserModel: Model<User>) {}

  async findOne(query: any): Promise<UserDocument | null> {
    return await this.UserModel.findOne(query);
  }

  async create(user: RegisterUserDTO): Promise<UserDocument> {
    return await this.UserModel.create(user);
  }
  async findById(id: string): Promise<UserDocument | null> {
    return await this.UserModel.findOne({ _id: id });
  }
}
