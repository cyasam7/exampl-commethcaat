import { Injectable } from '@nestjs/common';
import { RegisterUserDTO } from 'src/auth/infrastucture/dto/auth.dto';
import { HashRepository } from 'src/auth/infrastucture/repository/hash.repository';
import { UserReposity } from 'src/auth/infrastucture/repository/user.repository';
import { UseCaseBase } from 'src/base/UseCaseBase';

@Injectable()
export class RegisterUseCase implements UseCaseBase<RegisterUserDTO, boolean> {
  constructor(
    private userRepository: UserReposity,
    private hashRepository: HashRepository,
  ) {}

  async run(data: RegisterUserDTO): Promise<boolean> {
    const newPassword = this.hashRepository.hash(data.password);

    const newUser = {
      ...data,
      password: newPassword,
    };

    const user = await this.userRepository.create(newUser);
    return !!user;
  }
}
