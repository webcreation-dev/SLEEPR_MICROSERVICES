"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const payments_module_1 = require("./payments.module");
const nestjs_pino_1 = require("nestjs-pino");
async function bootstrap() {
    const app = await core_1.NestFactory.create(payments_module_1.PaymentsModule);
    const configService = app.get(config_1.ConfigService);
    app.connectMicroservice({
        transport: microservices_1.Transport.TCP,
        options: {
            host: '0.0.0.0',
            port: configService.get('PORT'),
        },
    });
    app.useLogger(app.get(nestjs_pino_1.Logger));
    await app.startAllMicroservices();
}
bootstrap();
//# sourceMappingURL=main.js.map