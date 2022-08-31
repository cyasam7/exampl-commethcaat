import { IPayloadToken } from '../infrastucture/repository/jwt.repositor';

export interface IJwtRepository {
  generateJWT(payload: IPayloadToken): string;
  isValid(token: string): boolean;
  decrypt(token: string): IPayloadToken;
}
