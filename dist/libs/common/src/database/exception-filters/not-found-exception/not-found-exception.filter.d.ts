import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { EntityNotFoundError } from 'typeorm';
export declare class NotFoundExceptionFilter implements ExceptionFilter {
    catch(exception: EntityNotFoundError, host: ArgumentsHost): void;
    private extractMessageData;
    private readonly ENTITY_NAME_REGEX;
}
