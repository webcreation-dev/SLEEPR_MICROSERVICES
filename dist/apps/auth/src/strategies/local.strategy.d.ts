import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
declare const LocalStategy_base: new (...args: any[]) => Strategy;
export declare class LocalStategy extends LocalStategy_base {
    private readonly authService;
    constructor(authService: AuthService);
    validate(email: string, password: string): Promise<import("../interfaces/request-user.interface").RequestUser>;
}
export {};
