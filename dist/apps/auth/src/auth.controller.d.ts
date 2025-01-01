import { Response } from 'express';
import { User } from '@app/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './users/dto/create-user.dto';
import { SaveUserDto } from './users/dto/save-user-dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(user: User, response: Response): Promise<void>;
    register(createUserDto: CreateUserDto): Promise<string>;
    verifyOtp(saveUserDto: SaveUserDto): Promise<{
        subscribed: User;
    }>;
    authenticate(data: any): Promise<any>;
    getUser(user: User): Promise<User>;
}
