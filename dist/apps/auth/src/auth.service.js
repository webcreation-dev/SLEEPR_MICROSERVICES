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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const common_2 = require("../../../libs/common/src");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("./users/users.service");
const users_repository_1 = require("./users/users.repository");
let AuthService = class AuthService {
    constructor(configService, jwtService, usersService, hashingService, usersRepository) {
        this.configService = configService;
        this.jwtService = jwtService;
        this.usersService = usersService;
        this.hashingService = hashingService;
        this.usersRepository = usersRepository;
    }
    async login(user, response) {
        const tokenPayload = { userId: user.id };
        const expires = new Date();
        expires.setSeconds(expires.getSeconds() + this.configService.get('JWT_EXPIRATION'));
        const token = this.jwtService.sign(tokenPayload);
        response.cookie('Authentication', token, {
            httpOnly: true,
            expires,
        });
        return token;
    }
    async validateLocal(email, password) {
        const user = await this.usersRepository.findOne({ email });
        const isMatch = await this.hashingService.compare(password, user.password);
        if (!isMatch) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        return this.createRequestUser(user);
    }
    async validateJwt(getUserDto) {
        return this.usersRepository.findOne({ id: 1 }, { roles: true });
    }
    createRequestUser(user) {
        const { id, roles } = user;
        const requestUser = { id, roles };
        return requestUser;
    }
    async register(createUserDto) {
        return this.usersService.create(createUserDto);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        jwt_1.JwtService,
        users_service_1.UsersService,
        common_2.HashingService,
        users_repository_1.UsersRepository])
], AuthService);
//# sourceMappingURL=auth.service.js.map