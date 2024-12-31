import { HashingService, User } from '@app/common';
import { RolesRepository } from '../roles.repository';
import { DataSource, EntitySubscriberInterface, InsertEvent, UpdateEvent } from 'typeorm';
export declare class UsersSubscriber implements EntitySubscriberInterface<User> {
    private readonly dataSource;
    private readonly hashingService;
    private readonly rolesRepository;
    constructor(dataSource: DataSource, hashingService: HashingService, rolesRepository: RolesRepository);
    beforeInsert(event: InsertEvent<User>): Promise<void>;
    beforeUpdate(event: UpdateEvent<User>): Promise<void>;
    listenTo(): typeof User;
}
