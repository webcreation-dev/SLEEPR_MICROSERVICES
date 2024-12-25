"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
describe('AuthController', () => {
    let authController;
    beforeEach(async () => {
        const app = await testing_1.Test.createTestingModule({
            controllers: [auth_controller_1.AuthController],
            providers: [auth_service_1.AuthService],
        }).compile();
        authController = app.get(auth_controller_1.AuthController);
    });
    describe('root', () => {
        it('should return "Hello World!"', () => {
        });
    });
});
//# sourceMappingURL=auth.controller.spec.js.map