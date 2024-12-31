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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("../../../../libs/common/src");
const users_repository_1 = require("./users.repository");
const roles_repository_1 = require("./roles.repository");
const common_3 = require("@nestjs/common");
let UsersService = class UsersService {
    constructor(usersRepository, rolesRepository) {
        this.usersRepository = usersRepository;
        this.rolesRepository = rolesRepository;
    }
    async create(createUserDto) {
    }
    async validateCreateUserDto(createUserDto) {
        try {
            await this.usersRepository.findOne({ email: createUserDto.email });
        }
        catch (err) {
            return;
        }
        throw new common_1.UnprocessableEntityException('Email already exists.');
    }
    async getRole($app_type) {
        switch ($app_type) {
            case common_2.AppTypeEnum.LOCAPAY:
                return common_2.RoleEnum.USER;
                break;
            case common_2.AppTypeEnum.LOCAPAY_BUSINESS:
                return common_2.RoleEnum.MANAGER;
                break;
            default:
                throw new common_3.NotFoundException(`Invalid user type`);
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository, roles_repository_1.RolesRepository])
], UsersService);
//# sourceMappingURL=users.service.js.map