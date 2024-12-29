import { TestService } from './test.service';
import { CreateChargeDto } from '@app/common';
export declare class TestController {
    private readonly testService;
    constructor(testService: TestService);
    getHello(): string;
    createCharge(data: CreateChargeDto): Promise<import("stripe").Stripe.Response<import("stripe").Stripe.PaymentIntent>>;
    res_test_from_microservices(): Promise<{
        success: boolean;
    }>;
}
