import { AbstractEntity } from '../database';
import { Column, Entity } from 'typeorm';
import { RoleEnum } from '../enums';

@Entity()
export class Role extends AbstractEntity<Role> {

  @Column({
    type: 'enum',
    enum: RoleEnum, 
    enumName: 'role_enum',
    default: RoleEnum.ADMIN,
  })
  name: RoleEnum;
}