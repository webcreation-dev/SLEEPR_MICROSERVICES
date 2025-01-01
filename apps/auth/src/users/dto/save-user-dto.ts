import { IsUnique, OtpDto, User } from '@app/common';
import { IsEmail } from 'class-validator';

export class SaveUserDto extends OtpDto {
    @IsEmail()
    @IsUnique(User, 'email', { message: 'Email must be unique' })
    email: string;
}
