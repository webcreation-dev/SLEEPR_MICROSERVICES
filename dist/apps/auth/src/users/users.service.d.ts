import { User } from '@app/common';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUserDto } from './dto/get-user.dto';
import { UsersRepository } from './users.repository';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    create(createUserDto: CreateUserDto): Promise<User>;
    private validateCreateUserDto;
    verifyUser(email: string, password: string): Promise<User>;
    getUser(getUserDto: GetUserDto): Promise<User>;
}
