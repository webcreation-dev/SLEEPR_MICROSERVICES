"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const temp_user_service_1 = require("./temp-user.service");
describe('TempUserService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [temp_user_service_1.TempUserService],
        }).compile();
        service = module.get(temp_user_service_1.TempUserService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=temp-user.service.spec.js.map