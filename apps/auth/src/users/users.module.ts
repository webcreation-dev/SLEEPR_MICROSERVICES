import { Module } from '@nestjs/common';
import { DatabaseModule, Role, User, UsualModule } from '@app/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';
import { UsersSubscriber } from './subscribers/users.subscriber';
import { RolesRepository } from './roles.repository';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([User, Role]),
    UsualModule,
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository, UsersSubscriber, UsersRepository, RolesRepository],
  exports: [UsersService, UsersRepository, RolesRepository],
})
export class UsersModule {}
