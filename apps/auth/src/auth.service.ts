import { Injectable, Inject, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HashingService, User } from '@app/common';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { TokenPayload } from './interfaces/token-payload.interface';
import { UsersService } from './users/users.service';
import { CreateUserDto } from './users/dto/create-user.dto';
import { RequestUser } from './interfaces/request-user.interface';
import { UsersRepository } from './users/users.repository';
import { GetUserDto } from './users/dto/get-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
    private readonly hashingService: HashingService,
    private readonly usersRepository: UsersRepository,
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

    // return {access_token: token};
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

  async register(createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
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