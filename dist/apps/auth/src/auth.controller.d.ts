import { Response } from 'express';
import { User } from '@app/common';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(user: User, response: Response): Promise<void>;
    authenticate(data: any): Promise<any>;
    req_auth_to_payments(): Promise<import("rxjs").Observable<string>>;
    req_auth_to_reservations(): Promise<import("rxjs").Observable<string>>;
    res_auth_from_microservices(): Promise<{
        success: boolean;
    }>;
}
