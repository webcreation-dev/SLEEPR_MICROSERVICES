"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const reservations_controller_1 = require("./reservations.controller");
const reservations_service_1 = require("./reservations.service");
describe('ReservationsController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [reservations_controller_1.ReservationsController],
            providers: [reservations_service_1.ReservationsService],
        }).compile();
        controller = module.get(reservations_controller_1.ReservationsController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=reservations.controller.spec.js.map