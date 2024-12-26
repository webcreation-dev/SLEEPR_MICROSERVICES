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
exports.TestService = void 0;
const common_1 = require("@nestjs/common");
const stripe_1 = require("stripe");
const config_1 = require("@nestjs/config");
let TestService = class TestService {
    constructor(configService) {
        this.configService = configService;
        this.stripe = new stripe_1.default(this.configService.get('STRIPE_SECRET_KEY'), {
            apiVersion: '2023-08-16',
        });
    }
    getHello() {
        return 'Hello World!';
    }
    async createCharge({ amount }) {
        const paymentIntent = await this.stripe.paymentIntents.create({
            amount: amount * 100,
            automatic_payment_methods: {
                enabled: true,
                allow_redirects: 'never',
            },
            confirm: true,
            payment_method: 'pm_card_visa',
            currency: 'usd',
        });
        return paymentIntent;
    }
};
exports.TestService = TestService;
exports.TestService = TestService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], TestService);
//# sourceMappingURL=test.service.js.map