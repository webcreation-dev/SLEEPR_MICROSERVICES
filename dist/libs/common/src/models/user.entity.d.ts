import { AbstractEntity } from '../database';
import { Role } from './role.entity';
import { AppTypeEnum } from '../enums';
export declare class User extends AbstractEntity<User> {
    email: string;
    password: string;
    app_type: AppTypeEnum;
    roles: Role[];
}
