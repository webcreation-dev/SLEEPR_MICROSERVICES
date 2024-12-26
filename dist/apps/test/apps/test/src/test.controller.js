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
exports.TestController = void 0;
const common_1 = require("@nestjs/common");
const test_service_1 = require("./test.service");
const microservices_1 = require("@nestjs/microservices");
let TestController = class TestController {
    constructor(testService) {
        this.testService = testService;
    }
    getHello() {
        return this.testService.getHello();
    }
    async res_test_from_microservices() {
        return { success: true };
    }
};
exports.TestController = TestController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], TestController.prototype, "getHello", null);
__decorate([
    (0, microservices_1.MessagePattern)('res_test_from_microservices'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TestController.prototype, "res_test_from_microservices", null);
exports.TestController = TestController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [test_service_1.TestService])
], TestController);
//# sourceMappingURL=test.controller.js.map