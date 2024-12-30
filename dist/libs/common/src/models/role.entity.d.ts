import { AbstractEntity } from '../database';
import { RoleEnum } from '../enums';
import { User } from './user.entity';
export declare class Role extends AbstractEntity<Role> {
    name: RoleEnum;
    users: User[];
}
