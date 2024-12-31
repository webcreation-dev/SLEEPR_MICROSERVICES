import { ArgumentsHost } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { DatabaseError } from '../../interfaces/database-error.interface';
export declare class DatabaseExceptionFilter extends BaseExceptionFilter {
    catch(exception: DatabaseError, host: ArgumentsHost): void;
    private readonly FIELD_NAME_REGEX;
    private readonly FIELD_VALUE_REGEX;
    private createErrorData;
    private extractMessageData;
    private readonly DatabaseErrorCode;
    private readonly MessageSnippet;
    private readonly Description;
}
