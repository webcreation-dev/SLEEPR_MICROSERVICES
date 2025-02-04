import { AbstractEntity } from '../database';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { Role } from './role.entity';
import { AppTypeEnum } from '../enums';
import { Exclude } from 'class-transformer';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class User extends AbstractEntity<User> {
  @Column({ unique: true })
  @Field()
  email: string;

  @Column({ unique: true })
  @Field()
  phone: string;

  @Exclude()
  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: AppTypeEnum,
    enumName: 'app_type_enum',
  })
  @Field()
  app_type: AppTypeEnum;

  @Column('int', { array: true, default: '{}' })
  @Field(() => [Number])
  wishlistedProperties: number[];

  @ManyToMany(() => Role, { cascade: true })
  @JoinTable()
  @Field(() => [Role])
  roles: Role[];
}
