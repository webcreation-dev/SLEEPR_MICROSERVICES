import { Exclude } from 'class-transformer';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { RegistryDates } from '../usual';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AbstractEntity<T> {
  @PrimaryGeneratedColumn()
  @Field(() => Number)
  id: number;

  @Exclude()
  @Column(() => RegistryDates, { prefix: false })
  @Field(() => RegistryDates)
  registryDates: RegistryDates;

  constructor(entity: Partial<T>) {
    Object.assign(this, entity);
  }
}
