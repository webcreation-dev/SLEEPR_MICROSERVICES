import { PaymentsService } from './payments.service';
import { CreateChargeDto } from '@app/common';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    createCharge(data: CreateChargeDto): Promise<{
        amount: number;
    }>;
}
