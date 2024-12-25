import { NotificationsService } from './notifications.service';
import { NotifyEmailDto } from './dto/notify-email.dto';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    notifyEmail(data: NotifyEmailDto): Promise<void>;
}
