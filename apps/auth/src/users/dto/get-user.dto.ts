import { Type } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetUserDto {
  @IsString()
  @IsNotEmpty()
  @Type(() => Number)
  @Field()
  id: number;
}
