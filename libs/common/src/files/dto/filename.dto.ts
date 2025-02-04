import { IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FilenameDto {
  @IsString()
  @Field()
  readonly filename: string;
}
