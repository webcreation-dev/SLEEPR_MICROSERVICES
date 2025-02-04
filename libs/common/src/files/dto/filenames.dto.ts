import { IsArray, IsString, ArrayNotEmpty } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FilenamesDto {
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  @Field(() => [String])
  filenames: string[];
}
