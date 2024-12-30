import { HashingService, User } from '@app/common';
import { DataSource, EntitySubscriberInterface, InsertEvent, UpdateEvent } from 'typeorm';
export declare class UsersSubscriber implements EntitySubscriberInterface<User> {
    private readonly dataSource;
    private readonly hashingService;
    constructor(dataSource: DataSource, hashingService: HashingService);
    beforeInsert(event: InsertEvent<User>): Promise<void>;
    beforeUpdate(event: UpdateEvent<User>): Promise<void>;
    listenTo(): typeof User;
}
