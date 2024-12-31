import { HttpStatus } from '@nestjs/common';
export declare const HttpError: {
    readonly NOT_FOUND: {
        readonly status: HttpStatus.NOT_FOUND;
        readonly error: "Not Found";
    };
    readonly CONFLICT: {
        readonly status: HttpStatus.CONFLICT;
        readonly error: "Conflict";
    };
    readonly PAYLOAD_TOO_LARGE: {
        readonly status: HttpStatus.PAYLOAD_TOO_LARGE;
        readonly error: "Payload Too Large";
    };
    readonly UNSUPPORTED_MEDIA_TYPE: {
        readonly status: HttpStatus.UNSUPPORTED_MEDIA_TYPE;
        readonly error: "Unsupported Media Type";
    };
    readonly BAD_REQUEST: {
        readonly status: HttpStatus.BAD_REQUEST;
        readonly error: "Bad Request";
    };
};
export type HttpError = (typeof HttpError)[keyof typeof HttpError];
