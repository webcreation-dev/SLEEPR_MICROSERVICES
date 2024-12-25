"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationsService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("../../../libs/common/src");
const reservations_repository_1 = require("./reservations.repository");
const microservices_1 = require("@nestjs/microservices");
const rxjs_1 = require("rxjs");
const reservation_entity_1 = require("./models/reservation.entity");
let ReservationsService = class ReservationsService {
    constructor(reservationsRepository, paymentsService) {
        this.reservationsRepository = reservationsRepository;
        this.paymentsService = paymentsService;
    }
    async create(createReservationDto) {
        return this.paymentsService
            .send('create_charge', createReservationDto.charge)
            .pipe((0, rxjs_1.map)((res) => {
            const reservation = new reservation_entity_1.Reservation({
                ...createReservationDto,
                invoiceId: res.id,
                timestamp: new Date(),
                userId: 1
            });
            return this.reservationsRepository.create(reservation);
        }));
    }
    async findAll() {
        return this.reservationsRepository.find({});
    }
    async findOne(id) {
        return this.reservationsRepository.findOne({ id });
    }
    async update(id, updateReservationDto) {
        return this.reservationsRepository.findOneAndUpdate({ id }, updateReservationDto);
    }
    async remove(id) {
        return this.reservationsRepository.findOneAndDelete({ id });
    }
};
ReservationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(common_2.PAYMENTS_SERVICE)),
    __metadata("design:paramtypes", [reservations_repository_1.ReservationsRepository,
        microservices_1.ClientProxy])
], ReservationsService);
exports.ReservationsService = ReservationsService;
//# sourceMappingURL=reservations.service.js.map