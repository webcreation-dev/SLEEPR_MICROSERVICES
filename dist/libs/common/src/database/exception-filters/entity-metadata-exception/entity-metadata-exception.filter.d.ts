import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { EntityMetadataNotFoundError } from 'typeorm';
export declare class EntityMetadataExceptionFilter implements ExceptionFilter {
    catch(exception: EntityMetadataNotFoundError, host: ArgumentsHost): void;
}
