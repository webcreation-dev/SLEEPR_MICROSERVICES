import { AppTypeEnum, HashingService, Role, RoleEnum, User } from '@app/common';
import { NotFoundException } from '@nestjs/common';
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
  ) {
    dataSource.subscribers.push(this);
  }

  async beforeInsert(event: InsertEvent<User>) {
    const { entity: user, manager } = event;

    const roleRepository = manager.getRepository(Role);

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

    let role = await roleRepository.findOne({ where: { name: roleName } });

    if (!role) {
      role = roleRepository.create({ name: roleName });
      await roleRepository.save(role);
    }

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
