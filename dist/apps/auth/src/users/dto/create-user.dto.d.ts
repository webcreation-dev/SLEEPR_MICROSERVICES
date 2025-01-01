import { AppTypeEnum } from '@app/common';
export declare class CreateUserDto {
    email: string;
    readonly phone: string;
    password: string;
    app_type: AppTypeEnum;
}
