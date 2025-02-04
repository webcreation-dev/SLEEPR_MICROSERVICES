import { IsOptional, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

export class NameFilterDto {
  @IsOptional()
  @IsString()
  @Field({ nullable: true })
  readonly name?: string;
}
