"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityMetadataExceptionFilter = void 0;
const error_response_util_1 = require("../../../usual/util/error-response.util");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let EntityMetadataExceptionFilter = class EntityMetadataExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const status = common_1.HttpStatus.BAD_REQUEST;
        const message = 'Entity metadata not found';
        const errorResponse = error_response_util_1.ErrorResponseUtil.createErrorResponse(status, message, exception.name);
        response.status(status).json(errorResponse);
    }
};
exports.EntityMetadataExceptionFilter = EntityMetadataExceptionFilter;
exports.EntityMetadataExceptionFilter = EntityMetadataExceptionFilter = __decorate([
    (0, common_1.Catch)(typeorm_1.EntityMetadataNotFoundError)
], EntityMetadataExceptionFilter);
//# sourceMappingURL=entity-metadata-exception.filter.js.map