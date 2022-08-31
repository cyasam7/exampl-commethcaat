import { Body, Controller, Post } from '@nestjs/common';
import {
  ILoginUseCase,
  LoginUseCase,
} from 'src/auth/application/Auth/LoginUseCase';
import { RegisterUseCase } from 'src/auth/application/Auth/RegisterUseCase';
import { LoginDTO, RegisterUserDTO } from '../dto/auth.dto';

@Controller('/auth')
export class AuthController {
  constructor(
    private loginUseCase: LoginUseCase,
    private registerUseCase: RegisterUseCase,
  ) {}

  @Post('/login')
  async login(@Body() body: LoginDTO): Promise<ILoginUseCase> {
    return this.loginUseCase.run(body);
  }

  @Post('/sign-up')
  async signUp(@Body() data: RegisterUserDTO): Promise<boolean> {
    return this.registerUseCase.run(data);
  }
}
