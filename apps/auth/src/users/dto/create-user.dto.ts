import {
  ArrayNotEmpty,
  IsArray,
  IsEmail,
  IsOptional,
  IsStrongPassword,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { AppTypeEnum, IsUnique, User } from '@app/common';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsUnique(User, 'email', { message: 'Email must be unique' })
  email: string;

  @IsStrongPassword()
  password: string;

  @IsEnum(AppTypeEnum)
  @IsNotEmpty()
  app_type: AppTypeEnum;
}