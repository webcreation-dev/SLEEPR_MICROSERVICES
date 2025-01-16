import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '@app/common';
import { Property } from './models/property.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class PropertysRepository extends AbstractRepository<Property> {
  protected readonly logger = new Logger(PropertysRepository.name);

  constructor(
    @InjectRepository(Property)
    itemsRepository: Repository<Property>,
    entityManager: EntityManager,
  ) {
    super(itemsRepository, entityManager);
  }
}