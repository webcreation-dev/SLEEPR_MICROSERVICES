import { Logger } from '@nestjs/common';
import { AbstractRepository } from '@app/common';
import { Reservation } from './models/reservation.entity';
import { EntityManager, Repository } from 'typeorm';
export declare class ReservationsRepository extends AbstractRepository<Reservation> {
    protected readonly logger: Logger;
    constructor(itemsRepository: Repository<Reservation>, entityManager: EntityManager);
}
