import {
  ArrayNotEmpty,
  IsArray,
  IsEmail,
  IsOptional,
  IsStrongPassword,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { AppTypeEnum } from '@app/common';
import { IsEnum, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsStrongPassword()
  password: string;

  @IsEnum(AppTypeEnum)
  @IsNotEmpty()
  app_type: AppTypeEnum;
}