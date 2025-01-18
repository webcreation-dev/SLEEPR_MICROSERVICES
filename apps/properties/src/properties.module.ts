import { Module } from '@nestjs/common';
import { PropertiesController } from './properties.controller';
import { PropertiesService } from './properties.service';
import {
  DatabaseModule,
  FilesModule,
  HealthModule,
  LoggerModule,
  QueryingModule,
} from '@app/common';
import { Property } from './models/property.entity';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PropertiesRepository } from './properties.repository';
import { GalleriesModule } from './galleries.module';
import { join } from 'path';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([Property]),
    HealthModule,
    LoggerModule,
    FilesModule,
    QueryingModule,
    GalleriesModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        HTTP_PORT: Joi.number().required(),
      }),
    }),
    ServeStaticModule.forRoot({
      rootPath: join(
        __dirname,
        '..',
        '..',
        '..',
        '..',
        'apps/properties/upload',
      ), // Répertoire physique
      serveRoot: '/upload', // Chemin public pour accéder aux fichiers
    }),
  ],
  controllers: [PropertiesController],
  providers: [PropertiesService, PropertiesRepository],
})
export class PropertiesModule {}
