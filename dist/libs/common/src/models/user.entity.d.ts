import { AbstractEntity } from '../database';
import { Role } from './role.entity';
export declare class User extends AbstractEntity<User> {
    email: string;
    password: string;
    roles: Role[];
}
