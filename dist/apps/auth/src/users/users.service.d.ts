import { User } from '@app/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './users.repository';
import { RolesRepository } from './roles.repository';
export declare class UsersService {
    private readonly usersRepository;
    private readonly rolesRepository;
    constructor(usersRepository: UsersRepository, rolesRepository: RolesRepository);
    create(createUserDto: CreateUserDto): Promise<User>;
    private getRole;
}
