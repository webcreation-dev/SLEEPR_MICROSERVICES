import { ConfigService } from '@nestjs/config';
import { User } from '@app/common';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
export declare class AuthService {
    private readonly configService;
    private readonly jwtService;
    constructor(configService: ConfigService, jwtService: JwtService);
    login(user: User, response: Response): Promise<string>;
}
