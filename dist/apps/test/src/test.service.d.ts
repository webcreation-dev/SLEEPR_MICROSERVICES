import { CreateChargeDto } from '@app/common';
import Stripe from 'stripe';
import { ConfigService } from '@nestjs/config';
export declare class TestService {
    private readonly configService;
    constructor(configService: ConfigService);
    private readonly stripe;
    getHello(): string;
    createCharge({ amount }: CreateChargeDto): Promise<Stripe.Response<Stripe.PaymentIntent>>;
}
