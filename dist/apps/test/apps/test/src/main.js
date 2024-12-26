"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const test_module_1 = require("./test.module");
const config_1 = require("@nestjs/config");
const common_1 = require("@nestjs/common");
const cookieParser = require("cookie-parser");
const nestjs_pino_1 = require("nestjs-pino");
const microservices_1 = require("@nestjs/microservices");
async function bootstrap() {
    const app = await core_1.NestFactory.create(test_module_1.TestModule);
    const configService = app.get(config_1.ConfigService);
    app.connectMicroservice({
        trasport: microservices_1.Transport.TCP,
        options: {
            host: '0.0.0.0',
            port: configService.get('TCP_PORT'),
        }
    });
    app.use(cookieParser());
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
    app.useLogger(app.get(nestjs_pino_1.Logger));
    await app.startAllMicroservices();
    await app.listen(configService.get('HTTP_PORT'));
}
bootstrap();
//# sourceMappingURL=main.js.map