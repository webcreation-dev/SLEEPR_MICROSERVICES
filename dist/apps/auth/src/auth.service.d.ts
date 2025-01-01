import { ConfigService } from '@nestjs/config';
import { HashingService, OtpService, User } from '@app/common';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { UsersService } from './users/users.service';
import { CreateUserDto } from './users/dto/create-user.dto';
import { RequestUser } from './interfaces/request-user.interface';
import { UsersRepository } from './users/users.repository';
import { GetUserDto } from './users/dto/get-user.dto';
import { TempUserService } from './users/temps/temp-user.service';
import { SaveUserDto } from './users/dto/save-user-dto';
export declare class AuthService {
    private readonly configService;
    private readonly jwtService;
    private readonly usersService;
    private readonly hashingService;
    private readonly usersRepository;
    private readonly otpService;
    private readonly tempUserService;
    constructor(configService: ConfigService, jwtService: JwtService, usersService: UsersService, hashingService: HashingService, usersRepository: UsersRepository, otpService: OtpService, tempUserService: TempUserService);
    login(user: User, response: Response): Promise<void>;
    register(createUserDto: CreateUserDto): Promise<string>;
    verifyOtp(saveUserDto: SaveUserDto): Promise<User>;
    validateLocal(email: string, password: string): Promise<RequestUser>;
    validateJwt(getUserDto: GetUserDto): Promise<User>;
    private createRequestUser;
}
