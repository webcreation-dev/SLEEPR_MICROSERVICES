"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const seeding_module_1 = require("./seeding.module");
const seeding_service_1 = require("./seeding.service");
async function bootstrap() {
    const app = await core_1.NestFactory.createApplicationContext(seeding_module_1.SeedingModule);
    const seedingService = app.get(seeding_service_1.SeedingService);
    await seedingService.seed();
    await app.close();
}
bootstrap();
//# sourceMappingURL=seeding.runner.js.map