import { Strategy } from 'passport-local';
import { UsersService } from '../users/users.service';
declare const LocalStategy_base: new (...args: any[]) => Strategy;
export declare class LocalStategy extends LocalStategy_base {
    private readonly usersService;
    constructor(usersService: UsersService);
    validate(email: string, password: string): Promise<import("../../../../libs/common/src").User>;
}
export {};
