import {
  IsEmail,
  IsStrongPassword,
} from 'class-validator';
import { Type } from 'class-transformer';
import { AppTypeEnum, IsUnique, User } from '@app/common';
import { IsEnum, IsNotEmpty, IsPhoneNumber } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserDto {
  @IsEmail()
  @IsUnique(User, 'email', { message: 'Email already exists' })
  @Field()
  email: string;

  @IsPhoneNumber('BJ')
  @IsUnique(User, 'phone', { message: 'Phone already exists' })
  @Field()
  readonly phone: string;

  @IsStrongPassword()
  @Field()
  password: string;

  @IsEnum(AppTypeEnum)
  @IsNotEmpty()
  @Field(() => AppTypeEnum)
  app_type: AppTypeEnum;
}
