"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const reservations_service_1 = require("./reservations.service");
describe('ReservationsService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [reservations_service_1.ReservationsService],
        }).compile();
        service = module.get(reservations_service_1.ReservationsService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=reservations.service.spec.js.map