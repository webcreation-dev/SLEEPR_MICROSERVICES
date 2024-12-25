import { Response } from 'express';
import { User } from '@app/common';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(user: User, response: Response): Promise<void>;
    authenticate(data: any): Promise<any>;
    create(): Promise<import("rxjs").Observable<{
        success: boolean;
    }>>;
}
