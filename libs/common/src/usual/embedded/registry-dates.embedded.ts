import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RegistryDates {
  @CreateDateColumn()
  @Field(() => Date)
  created_at: Date;

  @UpdateDateColumn()
  @Field(() => Date)
  updated_at: Date;

  @DeleteDateColumn()
  @Field(() => Date)
  deletedAt: Date;
}