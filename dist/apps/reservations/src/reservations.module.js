"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationsModule = void 0;
const common_1 = require("@nestjs/common");
const Joi = require("joi");
const reservations_service_1 = require("./reservations.service");
const reservations_controller_1 = require("./reservations.controller");
const common_2 = require("../../../libs/common/src");
const reservations_repository_1 = require("./reservations.repository");
const reservation_entity_1 = require("./models/reservation.entity");
const config_1 = require("@nestjs/config");
const microservices_1 = require("@nestjs/microservices");
let ReservationsModule = class ReservationsModule {
};
exports.ReservationsModule = ReservationsModule;
exports.ReservationsModule = ReservationsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            common_2.DatabaseModule,
            common_2.DatabaseModule.forFeature([reservation_entity_1.Reservation]),
            common_2.LoggerModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                validationSchema: Joi.object({
                    PORT: Joi.number().required(),
                    AUTH_HOST: Joi.string().required(),
                    PAYMENTS_HOST: Joi.string().required(),
                    AUTH_PORT: Joi.number().required(),
                    PAYMENTS_PORT: Joi.number().required(),
                }),
            }),
            microservices_1.ClientsModule.registerAsync([
                {
                    name: common_2.AUTH_SERVICE,
                    useFactory: (configService) => ({
                        transport: microservices_1.Transport.TCP,
                        options: {
                            host: configService.get('AUTH_HOST'),
                            port: configService.get('AUTH_PORT'),
                        },
                    }),
                    inject: [config_1.ConfigService],
                },
                {
                    name: common_2.PAYMENTS_SERVICE,
                    useFactory: (configService) => ({
                        transport: microservices_1.Transport.TCP,
                        options: {
                            host: configService.get('PAYMENTS_HOST'),
                            port: configService.get('PAYMENTS_PORT'),
                        },
                    }),
                    inject: [config_1.ConfigService],
                },
            ]),
        ],
        controllers: [reservations_controller_1.ReservationsController],
        providers: [reservations_service_1.ReservationsService, reservations_repository_1.ReservationsRepository],
    })
], ReservationsModule);
//# sourceMappingURL=reservations.module.js.map