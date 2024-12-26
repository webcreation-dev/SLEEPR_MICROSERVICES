import { Module } from '@nestjs/common';
import { LoggerModule, PAYMENTS_SERVICE, RESERVATIONS_SERVICE, TEST_SERVICE } from '@app/common';
import { JwtModule } from '@nestjs/jwt';
import * as Joi from 'joi';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from './users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LocalStategy } from './strategies/local.startegy';
import { JwtStrategy } from './strategies/jwt.startegy';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    UsersModule,
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        JWT_SECRET: Joi.string().required(),
        JWT_EXPIRATION: Joi.string().required(),
        HTTP_PORT: Joi.number().required(),
        TCP_PORT: Joi.number().required(),
      }),
    }),
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: `${configService.get('JWT_EXPIRATION')}s`,
        },
      }),
      inject: [ConfigService],
    }),
    ClientsModule.registerAsync([
          {
            name: PAYMENTS_SERVICE,
            useFactory: (configService: ConfigService) => ({
              transport: Transport.TCP,
              options: {
                host: configService.get('PAYMENTS_HOST'),
                port: configService.get('PAYMENTS_PORT'),
              },
            }),
            inject: [ConfigService],
          },
          {
            name: TEST_SERVICE,
            useFactory: (configService: ConfigService) => ({
              transport: Transport.TCP,
              options: {
                host: configService.get('TEST_HOST'),
                port: configService.get('TEST_PORT'),
              },
            }),
            inject: [ConfigService],
          },
          {
            name: RESERVATIONS_SERVICE,
            useFactory: (configService: ConfigService) => ({
              transport: Transport.TCP,
              options: {
                host: configService.get('RESERVATIONS_HOST'),
                port: configService.get('RESERVATIONS_PORT'),
              },
            }),
            inject: [ConfigService],
          },
        ]),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStategy, JwtStrategy],
})
export class AuthModule {}