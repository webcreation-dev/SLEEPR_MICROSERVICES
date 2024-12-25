import { RoleDto } from './role.dto';
export declare class CreateUserDto {
    email: string;
    password: string;
    roles?: RoleDto[];
}
