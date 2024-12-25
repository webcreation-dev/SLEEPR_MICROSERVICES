import { Logger } from '@nestjs/common';
import { AbstractRepository, User } from '@app/common';
import { EntityManager, Repository } from 'typeorm';
export declare class UsersRepository extends AbstractRepository<User> {
    protected readonly logger: Logger;
    constructor(usersRepository: Repository<User>, entityManager: EntityManager);
}
