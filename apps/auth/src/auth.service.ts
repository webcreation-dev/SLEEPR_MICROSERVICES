import { Injectable, Inject, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HashingService, OtpService, User } from '@app/common';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { TokenPayload } from './interfaces/token-payload.interface';
import { UsersService } from './users/users.service';
import { CreateUserDto } from './users/dto/create-user.dto';
import { RequestUser } from './interfaces/request-user.interface';
import { UsersRepository } from './users/users.repository';
import { GetUserDto } from './users/dto/get-user.dto';
import { TempUserService } from './users/temps/temp-user.service';
import { SaveUserDto } from './users/dto/save-user-dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
    private readonly hashingService: HashingService,
    private readonly usersRepository: UsersRepository,
    private readonly otpService: OtpService,
    private readonly tempUserService: TempUserService,
  ) {}

  async login(user: User, response: Response) {
    const tokenPayload: TokenPayload = { userId: user.id };

    const expires = new Date();
    expires.setSeconds(
      expires.getSeconds() + this.configService.get('JWT_EXPIRATION'),
    );

    const token = this.jwtService.sign(tokenPayload);

    response.cookie('Authentication', token, {
      httpOnly: true,
      expires,
    });

  }

  async register(createUserDto: CreateUserDto) {
    const { email } = createUserDto;

    this.tempUserService.storeTempUser(email, createUserDto);

    // await this.otpService.sendOtp(phone);

    return email;
  }

  async verifyOtp(saveUserDto: SaveUserDto) {
    const { email, otp } = saveUserDto;

    const tempUser = this.tempUserService.getTempUser(email);
    if (!tempUser) {
      throw new UnauthorizedException(
        'No registration process found for this phone number',
      );
    }

    // await this.otpService.verifyOtp(otp, phone);

    const user = await this.usersService.create(tempUser);
    return user;
  }

  async validateLocal(email: string, password: string) {
    const user = await this.usersRepository.findOne({ email });
    const isMatch = await this.hashingService.compare(password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.createRequestUser(user);
  }

  async validateJwt(getUserDto: GetUserDto) {
    return this.usersRepository.findOne({ id: 1 }, { roles: true });
  }

  private createRequestUser(user: User) {
    const { id, roles } = user;
    const requestUser: RequestUser = { id, roles };
    return requestUser;
  }


  // async forgotPassword(forgotPasswordDto: ForgotPasswordDto) {
  //   const { phone } = forgotPasswordDto;
  //   await this.otpService.sendOtp(phone);
  //   return phone;
  // }

  // async resetPassword(resetPasswordDto: ResetPasswordDto) {
  //   const { phone, otp, password } = resetPasswordDto;

  //   // await this.otpService.verifyOtp(otp, phone);

  //   const user = await this.usersRepository.findOne({ where: { phone } });
  //   user.password = await this.hashingService.hash(password);
  //   await this.usersRepository.save(user);

  //   return user;
  // }

  
}