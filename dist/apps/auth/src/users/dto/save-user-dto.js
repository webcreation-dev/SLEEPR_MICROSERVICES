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
exports.SaveUserDto = void 0;
const common_1 = require("../../../../../libs/common/src");
const class_validator_1 = require("class-validator");
class SaveUserDto extends common_1.OtpDto {
}
exports.SaveUserDto = SaveUserDto;
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, common_1.IsUnique)(common_1.User, 'email', { message: 'Email must be unique' }),
    __metadata("design:type", String)
], SaveUserDto.prototype, "email", void 0);
//# sourceMappingURL=save-user-dto.js.map