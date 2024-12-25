import { Logger } from '@nestjs/common';
import { AbstractEntity } from './abstract.entity';
import { EntityManager, FindOptionsRelations, FindOptionsWhere, Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
export declare abstract class AbstractRepository<T extends AbstractEntity<T>> {
    private readonly itemsRepository;
    private readonly entityManager;
    protected abstract readonly logger: Logger;
    constructor(itemsRepository: Repository<T>, entityManager: EntityManager);
    create(entity: T): Promise<T>;
    findOne(where: FindOptionsWhere<T>, relations?: FindOptionsRelations<T>): Promise<T>;
    findOneAndUpdate(where: FindOptionsWhere<T>, partialEntity: QueryDeepPartialEntity<T>): Promise<T>;
    find(where: FindOptionsWhere<T>): Promise<T[]>;
    findOneAndDelete(where: FindOptionsWhere<T>): Promise<void>;
}
