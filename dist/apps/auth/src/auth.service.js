"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const common_2 = require("../../../libs/common/src");
const jwt_1 = require("@nestjs/jwt");
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
let AuthService = class AuthService {
    constructor(configService, jwtService, paymentsService, reservationsService) {
        this.configService = configService;
        this.jwtService = jwtService;
        this.paymentsService = paymentsService;
        this.reservationsService = reservationsService;
    }
    async login(user, response) {
        const tokenPayload = {
            userId: user.id,
        };
        const expires = new Date();
        expires.setSeconds(expires.getSeconds() + this.configService.get('JWT_EXPIRATION'));
        const token = this.jwtService.sign(tokenPayload);
        response.cookie('Authentication', token, {
            httpOnly: true,
            expires,
        });
        return token;
    }
    async test() {
        return this.paymentsService
            .send('test', {})
            .pipe((0, rxjs_1.map)((res) => {
            return "success";
        }));
    }
    async test1() {
        return this.reservationsService
            .send('test1', {})
            .pipe((0, rxjs_1.map)((res) => {
            return "Connection successful";
        }));
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, common_1.Inject)(common_2.PAYMENTS_SERVICE)),
    __param(3, (0, common_1.Inject)(common_2.RESERVATIONS_SERVICE)),
    __metadata("design:paramtypes", [config_1.ConfigService,
        jwt_1.JwtService,
        microservices_1.ClientProxy,
        microservices_1.ClientProxy])
], AuthService);
//# sourceMappingURL=auth.service.js.map