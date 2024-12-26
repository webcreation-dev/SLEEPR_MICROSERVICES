import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
export declare class ReservationsController {
    private readonly reservationsService;
    constructor(reservationsService: ReservationsService);
    create(createReservationDto: CreateReservationDto): Promise<import("rxjs").Observable<{
        success: boolean;
    }>>;
    findAll(): Promise<import("./models/reservation.entity").Reservation[]>;
    findOne(id: string): Promise<import("./models/reservation.entity").Reservation>;
    update(id: string, updateReservationDto: UpdateReservationDto): Promise<import("./models/reservation.entity").Reservation>;
    remove(id: string): Promise<void>;
    req_reservations_to_payments(): Promise<import("rxjs").Observable<string>>;
    req_reservations_to_notifications(): Promise<import("rxjs").Observable<string>>;
    req_reservations_to_auth(): Promise<import("rxjs").Observable<string>>;
    res_reservations_from_microservices(): Promise<{
        success: boolean;
    }>;
}
