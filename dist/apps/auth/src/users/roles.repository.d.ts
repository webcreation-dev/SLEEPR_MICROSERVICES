import { Logger } from '@nestjs/common';
import { AbstractRepository, Role } from '@app/common';
import { EntityManager, Repository } from 'typeorm';
export declare class RolesRepository extends AbstractRepository<Role> {
    protected readonly logger: Logger;
    constructor(rolesRepository: Repository<Role>, entityManager: EntityManager);
}
