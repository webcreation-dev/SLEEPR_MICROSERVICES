import { CreateUserDto } from '../dto/create-user.dto';
export declare class TempUserService {
    private tempUsers;
    storeTempUser(email: string, userDto: CreateUserDto): void;
    getTempUser(email: string): CreateUserDto | undefined;
    removeTempUser(email: string): void;
    clearAllTempUsers(): void;
}
