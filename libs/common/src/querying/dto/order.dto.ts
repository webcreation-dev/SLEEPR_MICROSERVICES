import { IsIn, IsOptional } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

const Order = ['ASC', 'DESC'] as const;
type Order = (typeof Order)[number];

@InputType()
export class OrderDto {
  @IsOptional()
  @IsIn(Order)
  @Field(() => Order, { nullable: true })
  readonly order?: Order = 'ASC';
}
