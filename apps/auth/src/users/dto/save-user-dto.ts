import { OtpDto, User } from '@app/common';
import { IsPhoneNumber } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SaveUserDto extends OtpDto {
  @IsPhoneNumber('BJ')
  @Field()
  readonly phone: string;
}
