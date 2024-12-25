"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const env_module_1 = require("../env/env.module");
const database_config_1 = require("./config/database.config");
let DatabaseModule = class DatabaseModule {
    static forFeature(models) {
        return typeorm_1.TypeOrmModule.forFeature(models);
    }
};
DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [env_module_1.EnvModule, typeorm_1.TypeOrmModule.forRootAsync(database_config_1.default.asProvider())],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map