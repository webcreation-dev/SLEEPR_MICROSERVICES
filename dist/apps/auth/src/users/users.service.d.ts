import { User } from '@app/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './users.repository';
import { RolesRepository } from './roles.repository';
export declare class UsersService {
    private readonly usersRepository;
    private readonly roleRepository;
    constructor(usersRepository: UsersRepository, roleRepository: RolesRepository);
    create(createUserDto: CreateUserDto): Promise<User>;
    private validateCreateUserDto;
}
