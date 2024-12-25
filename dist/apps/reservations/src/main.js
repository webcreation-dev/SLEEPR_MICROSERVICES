"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const cookieParser = require("cookie-parser");
const nestjs_pino_1 = require("nestjs-pino");
const reservations_module_1 = require("./reservations.module");
const microservices_1 = require("@nestjs/microservices");
async function bootstrap() {
    const app = await core_1.NestFactory.create(reservations_module_1.ReservationsModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
    app.use(cookieParser());
    const configService = app.get(config_1.ConfigService);
    await app.listen(configService.get('PORT'));
    app.connectMicroservice({
        transport: microservices_1.Transport.TCP,
        options: {
            host: '0.0.0.0',
            port: 3004,
        },
    });
    app.useLogger(app.get(nestjs_pino_1.Logger));
    await app.startAllMicroservices();
}
bootstrap();
//# sourceMappingURL=main.js.map