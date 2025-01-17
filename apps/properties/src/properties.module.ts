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
import { PropertiesRepository } from './properties.repository';
import { GalleriesRepository } from './galleries.repository';
import { GalleriesModule } from './galleries.module';

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
  ],
  controllers: [PropertiesController],
  providers: [PropertiesService, PropertiesRepository],
})
export class PropertiesModule {}
