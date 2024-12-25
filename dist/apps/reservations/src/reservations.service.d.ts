import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ReservationsRepository } from './reservations.repository';
import { ClientProxy } from '@nestjs/microservices';
import { Reservation } from './models/reservation.entity';
export declare class ReservationsService {
    private readonly reservationsRepository;
    private readonly paymentsService;
    constructor(reservationsRepository: ReservationsRepository, paymentsService: ClientProxy);
    create(createReservationDto: CreateReservationDto): Promise<import("rxjs").Observable<{
        success: boolean;
    }>>;
    findAll(): Promise<Reservation[]>;
    findOne(id: number): Promise<Reservation>;
    update(id: number, updateReservationDto: UpdateReservationDto): Promise<Reservation>;
    remove(id: number): Promise<void>;
}
