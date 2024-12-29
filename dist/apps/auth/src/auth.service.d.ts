import { ConfigService } from '@nestjs/config';
import { User } from '@app/common';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { ClientProxy } from '@nestjs/microservices';
import { CreateReservationDto } from './dto/create-reservation.dto';
export declare class AuthService {
    private readonly configService;
    private readonly jwtService;
    private readonly paymentsService;
    private readonly reservationsService;
    private readonly testService;
    constructor(configService: ConfigService, jwtService: JwtService, paymentsService: ClientProxy, reservationsService: ClientProxy, testService: ClientProxy);
    login(user: User, response: Response): Promise<string>;
    req_auth_to_payments(): Promise<import("rxjs").Observable<string>>;
    req_auth_to_test(): Promise<import("rxjs").Observable<string>>;
    req_auth_to_reservations(): Promise<import("rxjs").Observable<string>>;
    create_payments(createReservationDto: CreateReservationDto): Promise<import("rxjs").Observable<{
        response: any;
    }>>;
}
