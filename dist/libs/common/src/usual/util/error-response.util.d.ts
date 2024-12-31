import { HttpStatus } from '@nestjs/common';
export interface ErrorResponse {
    statusCode: number;
    message: string | object;
    error: string;
    meta?: object;
}
export declare class ErrorResponseUtil {
    static createErrorResponse(statusCode: HttpStatus, message: string | object, error: string, meta?: object): ErrorResponse;
}
