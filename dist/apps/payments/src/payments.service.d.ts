import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
import { CreateChargeDto } from '@app/common';
import { ClientProxy } from '@nestjs/microservices';
export declare class PaymentsService {
    private readonly configService;
    private readonly notificationsService;
    private readonly stripe;
    constructor(configService: ConfigService, notificationsService: ClientProxy);
    createCharge({ amount }: CreateChargeDto): Promise<Stripe.Response<Stripe.PaymentIntent>>;
}
