"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsualModule = void 0;
const common_1 = require("@nestjs/common");
const hashing_service_1 = require("./hashing/hashing.service");
const bcrypt_service_1 = require("./hashing/bcrypt.service");
let UsualModule = class UsualModule {
};
exports.UsualModule = UsualModule;
exports.UsualModule = UsualModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [
            {
                provide: hashing_service_1.HashingService,
                useClass: bcrypt_service_1.BcryptService,
            },
        ],
        exports: [hashing_service_1.HashingService],
    })
], UsualModule);
//# sourceMappingURL=usual.module.js.map