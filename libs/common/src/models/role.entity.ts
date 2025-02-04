import { AbstractEntity } from '../database';
import { Column, Entity, ManyToMany } from 'typeorm';
import { RoleEnum } from '../enums';
import { User } from './user.entity';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Role extends AbstractEntity<Role> {
  @Column({
    type: 'enum',
    enum: RoleEnum,
    enumName: 'role_enum',
  })
  @Field()
  name: RoleEnum;

  @ManyToMany(() => User, (user) => user.roles)
  @Field(() => [User])
  users: User[];
}
