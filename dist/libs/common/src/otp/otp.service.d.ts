import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
export declare class OtpService {
    private readonly httpService;
    private readonly configService;
    private readonly apiUrl;
    private readonly apiId;
    private readonly authHeader;
    constructor(httpService: HttpService, configService: ConfigService);
    sendOtp(sendTo: string): Promise<any>;
    verifyOtp(code: number, sendTo: string): Promise<any>;
}
