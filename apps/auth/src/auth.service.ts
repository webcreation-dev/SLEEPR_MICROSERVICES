import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PAYMENTS_SERVICE, RESERVATIONS_SERVICE, User } from '@app/common';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { TokenPayload } from './interfaces/token-payload.interface';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    @Inject(PAYMENTS_SERVICE) private readonly paymentsService: ClientProxy,
    @Inject(RESERVATIONS_SERVICE) private readonly reservationsService: ClientProxy,
  ) {}

  async login(user: User, response: Response) {
    const tokenPayload: TokenPayload = {
      userId: user.id,
    };

    const expires = new Date();
    expires.setSeconds(
      expires.getSeconds() + this.configService.get('JWT_EXPIRATION'),
    );

    const token = this.jwtService.sign(tokenPayload);

    response.cookie('Authentication', token, {
      httpOnly: true,
      expires,
    });

    return token;
  }

  async req_auth_to_payments() {
      return this.paymentsService
        .send('res_payments_from_microservices', {})
        .pipe(
          map((res) => {
            return "Connection successful payments from auth";
          }),
        );
    }

  async req_auth_to_reservations() {
      return this.reservationsService
        .send('res_reservations_from_microservices', {})
        .pipe(
          map((res) => {
            return "Connection successful reservations from auth";
          }),
        );
    }
}