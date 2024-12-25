import { ConfigService } from '@nestjs/config';
import { NotifyEmailDto } from './dto/notify-email.dto';
export declare class NotificationsService {
    private readonly configService;
    constructor(configService: ConfigService);
    private readonly transport;
    notifyEmail({ email, text }: NotifyEmailDto): Promise<void>;
}
