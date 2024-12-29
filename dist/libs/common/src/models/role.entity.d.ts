import { AbstractEntity } from '../database';
import { RoleEnum } from '../enums';
export declare class Role extends AbstractEntity<Role> {
    name: RoleEnum;
}
