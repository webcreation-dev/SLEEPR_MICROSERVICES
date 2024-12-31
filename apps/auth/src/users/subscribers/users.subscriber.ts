import { AppTypeEnum, HashingService, Role, RoleEnum, User } from '@app/common';
import { NotFoundException } from '@nestjs/common';
import { RolesRepository } from '../roles.repository';
import {
  DataSource,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  UpdateEvent,
} from 'typeorm';

@EventSubscriber()
export class UsersSubscriber implements EntitySubscriberInterface<User> {
  constructor(
    private readonly dataSource: DataSource,
    private readonly hashingService: HashingService,
    private readonly rolesRepository: RolesRepository
  ) {
    dataSource.subscribers.push(this);
  }

  async beforeInsert(event: InsertEvent<User>) {
    const { entity: user } = event;

    let roleName: RoleEnum;

    switch (user.app_type) {
      case AppTypeEnum.LOCAPAY:
        roleName = RoleEnum.USER;
        break;
      case AppTypeEnum.LOCAPAY_BUSINESS:
        roleName = RoleEnum.MANAGER;
        break;
      default:
        throw new NotFoundException(`Invalid user type: ${user.app_type}`);
    }

    // await this.rolesRepository.create(new Role({ name: RoleEnum.USER}));
    // await this.rolesRepository.create(new Role({ name: RoleEnum.MANAGER}));

    let role = await this.rolesRepository.findOne({ name: roleName });
    user.roles = [role];

    user.password = await this.hashingService.hash(user.password);
  }
  

  async beforeUpdate(event: UpdateEvent<User>) {
    const { entity, databaseEntity: databaseUser } = event;
    const user = entity as User;

    if (user.password !== databaseUser.password) {
      user.password = await this.hashingService.hash(user.password);
    }
  }

  listenTo() {
    return User;
  }
}
