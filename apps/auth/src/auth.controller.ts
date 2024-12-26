import { Controller, Post, Res, UseGuards, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Response } from 'express';
import { CurrentUser, User } from '@app/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @CurrentUser() user: User,
    @Res({ passthrough: true }) response: Response,
  ) {
    const jwt = await this.authService.login(user, response);
    response.send(jwt);
  }

  @UseGuards(JwtAuthGuard)
  @MessagePattern('authenticate')
  async authenticate(@Payload() data: any) {
    return data.user;
  }

  
  @Post('req_auth_to_payments')
    async req_auth_to_payments() {
      return this.authService.req_auth_to_payments();
  }

  @Post('req_auth_to_reservations')
  async req_auth_to_reservations() {
    return this.authService.req_auth_to_reservations();
  }

  @MessagePattern('res_auth_from_microservices')
  @UsePipes(new ValidationPipe())
  async res_auth_from_microservices() {
    return { success: true };
  }
}