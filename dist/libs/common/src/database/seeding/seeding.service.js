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
exports.SeedingService = void 0;
const enums_1 = require("../../enums");
const models_1 = require("../../models");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let SeedingService = class SeedingService {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
    async seed() {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const rolesRepository = queryRunner.manager.getRepository(models_1.Role);
            const categories = await rolesRepository.find();
            await rolesRepository.remove(categories);
            const role1 = rolesRepository.create({ name: enums_1.RoleEnum.USER });
            const role2 = rolesRepository.create({ name: enums_1.RoleEnum.MANAGER });
            await rolesRepository.save([role1, role2]);
            await queryRunner.commitTransaction();
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        }
        finally {
            await queryRunner.release();
        }
    }
};
exports.SeedingService = SeedingService;
exports.SeedingService = SeedingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], SeedingService);
//# sourceMappingURL=seeding.service.js.map