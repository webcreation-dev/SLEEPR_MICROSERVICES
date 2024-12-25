import { AbstractEntity } from '@app/common';
export declare class Reservation extends AbstractEntity<Reservation> {
    timestamp: Date;
    startDate: Date;
    endDate: Date;
    userId: number;
    invoiceId: string;
}
