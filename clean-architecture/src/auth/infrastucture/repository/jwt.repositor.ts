import { Injectable } from '@nestjs/common';
import { IJwtRepository } from 'src/auth/domain/jwt.repository';
import * as jwt from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';
import { IEnvConfig } from 'src/config';

export interface IPayloadToken {
  sub: string;
  role?: string;
}

@Injectable()
export class JwtRepository implements IJwtRepository {
  constructor(private config: ConfigService<IEnvConfig>) {}

  generateJWT(payload: IPayloadToken): string {
    return jwt.sign(payload, this.config.get('SECRET_WORD'));
  }
  isValid(token: string): boolean {
    return !!jwt.verify(token, this.config.get('SECRET_WORD'));
  }
  decrypt(token: string): IPayloadToken {
    return jwt.decode(token) as IPayloadToken;
  }
}
