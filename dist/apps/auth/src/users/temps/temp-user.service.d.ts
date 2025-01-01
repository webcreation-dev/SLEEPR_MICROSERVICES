import { CreateUserDto } from '../dto/create-user.dto';
export declare class TempUserService {
    private tempUsers;
    storeTempUser(phone: string, userDto: CreateUserDto): void;
    getTempUser(phone: string): CreateUserDto | undefined;
    removeTempUser(phone: string): void;
    clearAllTempUsers(): void;
}
