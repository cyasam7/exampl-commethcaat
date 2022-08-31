import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './infrastucture/model/user.model';
import { UserReposity } from './infrastucture/repository/user.repository';
import { LoginUseCase } from './application/Auth/LoginUseCase';
import { AuthController } from './infrastucture/controllers/auth.routes';
import { UserController } from './infrastucture/controllers/user.routes';
import { HashRepository } from './infrastucture/repository/hash.repository';
import { JwtRepository } from './infrastucture/repository/jwt.repositor';
import { RegisterUseCase } from './application/Auth/RegisterUseCase';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController, AuthController],
  providers: [
    UserReposity,
    LoginUseCase,
    HashRepository,
    JwtRepository,
    RegisterUseCase,
  ],
})
export class AuthModule {}
