import { ConfigService } from '@nestjs/config';
import { User } from '@app/common';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { ClientProxy } from '@nestjs/microservices';
export declare class AuthService {
    private readonly configService;
    private readonly jwtService;
    private readonly paymentsService;
    private readonly reservationsService;
    constructor(configService: ConfigService, jwtService: JwtService, paymentsService: ClientProxy, reservationsService: ClientProxy);
    login(user: User, response: Response): Promise<string>;
    test(): Promise<import("rxjs").Observable<string>>;
    test1(): Promise<import("rxjs").Observable<string>>;
}
