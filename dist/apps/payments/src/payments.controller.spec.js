"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const payments_controller_1 = require("./payments.controller");
const payments_service_1 = require("./payments.service");
describe('PaymentsController', () => {
    let paymentsController;
    beforeEach(async () => {
        const app = await testing_1.Test.createTestingModule({
            controllers: [payments_controller_1.PaymentsController],
            providers: [payments_service_1.PaymentsService],
        }).compile();
        paymentsController = app.get(payments_controller_1.PaymentsController);
    });
    describe('root', () => {
        it('should return "Hello World!"', () => {
        });
    });
});
//# sourceMappingURL=payments.controller.spec.js.map