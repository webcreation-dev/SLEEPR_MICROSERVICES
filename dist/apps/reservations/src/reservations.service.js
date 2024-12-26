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
let ReservationsService = class ReservationsService {
    constructor(reservationsRepository, paymentsService, authService, notificationsService) {
        this.reservationsRepository = reservationsRepository;
        this.paymentsService = paymentsService;
        this.authService = authService;
        this.notificationsService = notificationsService;
    }
    async req_reservations_to_payments() {
        return this.paymentsService
            .send('res_payments_from_microservices', {})
            .pipe((0, rxjs_1.map)((res) => {
            return "Connection successful payments from reservations";
        }));
    }
    async create(createReservationDto) {
        return this.paymentsService
            .send('create_charge', createReservationDto.charge)
            .pipe((0, rxjs_1.map)((res) => {
            return { success: true };
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
    async req_reservations_to_auth() {
        return this.authService
            .send('res_auth_from_microservices', {})
            .pipe((0, rxjs_1.map)((res) => {
            return "Connection successful auth from reservations";
        }));
    }
    async req_reservations_to_notifications() {
        return this.notificationsService
            .send('res_notifications_from_microservices', {})
            .pipe((0, rxjs_1.map)((res) => {
            return "Connection successful auth from notifications";
        }));
    }
};
exports.ReservationsService = ReservationsService;
exports.ReservationsService = ReservationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(common_2.PAYMENTS_SERVICE)),
    __param(2, (0, common_1.Inject)(common_2.AUTH_SERVICE)),
    __param(3, (0, common_1.Inject)(common_2.NOTIFICATIONS_SERVICE)),
    __metadata("design:paramtypes", [reservations_repository_1.ReservationsRepository,
        microservices_1.ClientProxy,
        microservices_1.ClientProxy,
        microservices_1.ClientProxy])
], ReservationsService);
//# sourceMappingURL=reservations.service.js.map