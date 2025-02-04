import { IsCardinal } from '@app/common/usual/decorators/validators/is-cardinal.decorator';
import { IsOptional, Max } from 'class-validator';
import { MAX_PAGE_NUMBER, MAX_PAGE_SIZE } from '../util/querying.constants';
import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PaginationDto {
  @Max(MAX_PAGE_SIZE)
  @IsOptional()
  @IsCardinal()
  @Field({ nullable: true })
  readonly limit?: number;

  @Max(MAX_PAGE_NUMBER)
  @IsOptional()
  @IsCardinal()
  @Field({ nullable: true })
  readonly page?: number = 1;
}
