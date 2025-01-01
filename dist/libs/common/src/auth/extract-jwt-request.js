"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractJwtFromRequest = extractJwtFromRequest;
function extractJwtFromRequest(request) {
    if (request.headers.authorization &&
        request.headers.authorization.startsWith('Bearer ')) {
        return request.headers.authorization.slice(7);
    }
    return null;
}
//# sourceMappingURL=extract-jwt-request.js.map