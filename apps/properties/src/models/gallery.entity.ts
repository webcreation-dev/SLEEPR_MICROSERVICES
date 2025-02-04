import { Entity, Column, ManyToOne } from 'typeorm';
import { Property } from './property.entity';
import { AbstractEntity } from '@app/common';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Gallery extends AbstractEntity<Gallery> {
  @Column()
  @Field()
  url: string;

  @ManyToOne(() => Property, (property) => property.galleries, {
    onDelete: 'CASCADE',
  })
  @Field(() => Property)
  property: Property;
}
