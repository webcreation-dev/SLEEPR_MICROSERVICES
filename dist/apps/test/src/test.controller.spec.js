"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const test_controller_1 = require("./test.controller");
const test_service_1 = require("./test.service");
describe('TestController', () => {
    let testController;
    beforeEach(async () => {
        const app = await testing_1.Test.createTestingModule({
            controllers: [test_controller_1.TestController],
            providers: [test_service_1.TestService],
        }).compile();
        testController = app.get(test_controller_1.TestController);
    });
    describe('root', () => {
        it('should return "Hello World!"', () => {
            expect(testController.getHello()).toBe('Hello World!');
        });
    });
});
//# sourceMappingURL=test.controller.spec.js.map