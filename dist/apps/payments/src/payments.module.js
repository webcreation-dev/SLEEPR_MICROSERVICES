"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const Joi = require("joi");
const common_2 = require("../../../libs/common/src");
const payments_controller_1 = require("./payments.controller");
const payments_service_1 = require("./payments.service");
const microservices_1 = require("@nestjs/microservices");
let PaymentsModule = class PaymentsModule {
};
exports.PaymentsModule = PaymentsModule;
exports.PaymentsModule = PaymentsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                validationSchema: Joi.object({
                    PORT: Joi.number().required(),
                    NOTIFICATIONS_HOST: Joi.string().required(),
                    NOTIFICATIONS_PORT: Joi.number().required(),
                    STRIPE_SECRET_KEY: Joi.string().required(),
                }),
            }),
            common_2.LoggerModule,
            microservices_1.ClientsModule.registerAsync([
                {
                    name: common_2.NOTIFICATIONS_SERVICE,
                    useFactory: (configService) => ({
                        transport: microservices_1.Transport.TCP,
                        options: {
                            host: configService.get('NOTIFICATIONS_HOST'),
                            port: configService.get('NOTIFICATIONS_PORT'),
                        },
                    }),
                    inject: [config_1.ConfigService],
                }
            ])
        ],
        controllers: [payments_controller_1.PaymentsController],
        providers: [payments_service_1.PaymentsService],
    })
], PaymentsModule);
//# sourceMappingURL=payments.module.js.map