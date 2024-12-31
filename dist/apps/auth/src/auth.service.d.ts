import { ConfigService } from '@nestjs/config';
import { HashingService, User } from '@app/common';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { UsersService } from './users/users.service';
import { CreateUserDto } from './users/dto/create-user.dto';
import { RequestUser } from './interfaces/request-user.interface';
import { UsersRepository } from './users/users.repository';
import { GetUserDto } from './users/dto/get-user.dto';
export declare class AuthService {
    private readonly configService;
    private readonly jwtService;
    private readonly usersService;
    private readonly hashingService;
    private readonly usersRepository;
    constructor(configService: ConfigService, jwtService: JwtService, usersService: UsersService, hashingService: HashingService, usersRepository: UsersRepository);
    login(user: User, response: Response): Promise<string>;
    validateLocal(email: string, password: string): Promise<RequestUser>;
    validateJwt(getUserDto: GetUserDto): Promise<User>;
    private createRequestUser;
    register(createUserDto: CreateUserDto): Promise<User>;
}
