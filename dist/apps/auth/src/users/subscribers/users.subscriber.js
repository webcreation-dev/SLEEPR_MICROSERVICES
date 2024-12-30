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
exports.UsersSubscriber = void 0;
const common_1 = require("../../../../../libs/common/src");
const common_2 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let UsersSubscriber = class UsersSubscriber {
    constructor(dataSource, hashingService) {
        this.dataSource = dataSource;
        this.hashingService = hashingService;
        dataSource.subscribers.push(this);
    }
    async beforeInsert(event) {
        const { entity: user, manager } = event;
        const roleRepository = manager.getRepository(common_1.Role);
        let roleName;
        switch (user.app_type) {
            case common_1.AppTypeEnum.LOCAPAY:
                roleName = common_1.RoleEnum.USER;
                break;
            case common_1.AppTypeEnum.LOCAPAY_BUSINESS:
                roleName = common_1.RoleEnum.MANAGER;
                break;
            default:
                throw new common_2.NotFoundException(`Invalid user type: ${user.app_type}`);
        }
        let role = await roleRepository.findOne({ where: { name: roleName } });
        if (!role) {
            role = roleRepository.create({ name: roleName });
            await roleRepository.save(role);
        }
        user.roles = [role];
        user.password = await this.hashingService.hash(user.password);
    }
    async beforeUpdate(event) {
        const { entity, databaseEntity: databaseUser } = event;
        const user = entity;
        if (user.password !== databaseUser.password) {
            user.password = await this.hashingService.hash(user.password);
        }
    }
    listenTo() {
        return common_1.User;
    }
};
exports.UsersSubscriber = UsersSubscriber;
exports.UsersSubscriber = UsersSubscriber = __decorate([
    (0, typeorm_1.EventSubscriber)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource,
        common_1.HashingService])
], UsersSubscriber);
//# sourceMappingURL=users.subscriber.js.map