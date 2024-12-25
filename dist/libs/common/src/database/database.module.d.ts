import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';
export declare class DatabaseModule {
    static forFeature(models: EntityClassOrSchema[]): import("@nestjs/common").DynamicModule;
}
