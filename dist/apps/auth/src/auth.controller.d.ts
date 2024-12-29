import { Response } from 'express';
import { User } from '@app/common';
import { AuthService } from './auth.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(user: User, response: Response): Promise<void>;
    authenticate(data: any): Promise<any>;
    req_auth_to_payments(): Promise<import("rxjs").Observable<string>>;
    req_auth_to_reservations(): Promise<import("rxjs").Observable<string>>;
    req_auth_to_test(): Promise<import("rxjs").Observable<string>>;
    create(createReservationDto: CreateReservationDto): Promise<import("rxjs").Observable<{
        response: any;
    }>>;
    res_auth_from_microservices(): Promise<{
        success: boolean;
    }>;
}
