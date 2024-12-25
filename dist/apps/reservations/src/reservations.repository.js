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
var ReservationsRepository_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationsRepository = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("../../../libs/common/src");
const reservation_entity_1 = require("./models/reservation.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let ReservationsRepository = ReservationsRepository_1 = class ReservationsRepository extends common_2.AbstractRepository {
    constructor(itemsRepository, entityManager) {
        super(itemsRepository, entityManager);
        this.logger = new common_1.Logger(ReservationsRepository_1.name);
    }
};
exports.ReservationsRepository = ReservationsRepository;
exports.ReservationsRepository = ReservationsRepository = ReservationsRepository_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(reservation_entity_1.Reservation)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.EntityManager])
], ReservationsRepository);
//# sourceMappingURL=reservations.repository.js.map