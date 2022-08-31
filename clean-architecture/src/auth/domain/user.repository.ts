import { UserDocument } from '../infrastucture/model/user.model';

export interface IUserRepository {
  create(user: any): Promise<UserDocument>;
  findOne(query: any): Promise<UserDocument> | null;
  findById(uuid: string): Promise<UserDocument> | null;
}
