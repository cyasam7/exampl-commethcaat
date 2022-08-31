import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class LoginDTO {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @ApiProperty({ default: 'value' })
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @ApiProperty({ default: 'value' })
  readonly password: string;
}

export class RegisterUserDTO {
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @ApiProperty({ default: 'value' })
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @ApiProperty()
  readonly lastName: string;
  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @ApiProperty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @IsDefined()
  @ApiProperty()
  readonly password: string;

  @IsString()
  @ApiProperty()
  readonly phone?: string;

  @IsString()
  @ApiProperty()
  readonly profilePhoto?: string;

  @IsString()
  @IsArray()
  @ApiProperty()
  readonly photos?: string[];
}
