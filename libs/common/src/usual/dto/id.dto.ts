import { IsNumber } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class IdDto {
  @IsNumber()
  @Field()
  readonly id: number;
}
