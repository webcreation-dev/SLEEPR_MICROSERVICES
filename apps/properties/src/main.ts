import { NestFactory } from '@nestjs/core';
import { PropertiesModule } from './properties.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { ConfigService } from '@nestjs/config';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(PropertiesModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.use(cookieParser());
  const configService = app.get(ConfigService);
  await app.listen(configService.get('HTTP_PORT'));

  app.useLogger(app.get(Logger));
}
bootstrap();
