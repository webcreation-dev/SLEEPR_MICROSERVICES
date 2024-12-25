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
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const stripe_1 = require("stripe");
const common_2 = require("../../../libs/common/src");
const microservices_1 = require("@nestjs/microservices");
let PaymentsService = class PaymentsService {
    constructor(configService, notificationsService) {
        this.configService = configService;
        this.notificationsService = notificationsService;
        this.stripe = new stripe_1.default(this.configService.get('STRIPE_SECRET_KEY'), {
            apiVersion: '2022-11-15',
        });
    }
    async createCharge({ amount }) {
        const paymentIntent = await this.stripe.paymentIntents.create({
            amount: amount * 100,
            confirm: true,
            payment_method: 'pm_card_visa',
            currency: 'usd',
        });
        return paymentIntent;
    }
};
PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(common_2.NOTIFICATIONS_SERVICE)),
    __metadata("design:paramtypes", [config_1.ConfigService,
        microservices_1.ClientProxy])
], PaymentsService);
exports.PaymentsService = PaymentsService;
//# sourceMappingURL=payments.service.js.map