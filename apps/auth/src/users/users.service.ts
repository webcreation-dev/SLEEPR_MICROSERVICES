import {
  Injectable,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { User, Role, RoleEnum, AppTypeEnum } from '@app/common';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUserDto } from './dto/get-user.dto';
import { UsersRepository } from './users.repository';
import { RolesRepository } from './roles.repository';
import { NotFoundException } from '@nestjs/common';
import { AddWishlistDto } from './dto/add-wishlist.dto';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly rolesRepository: RolesRepository,
  ) {}

  async findOne(id: number) {
    return this.usersRepository.findOne({ id });
  }

  async create(createUserDto: CreateUserDto) {
    await this.rolesRepository.create(new Role({ name: RoleEnum.USER }));
    await this.rolesRepository.create(new Role({ name: RoleEnum.MANAGER }));
    const user = new User({
      ...createUserDto,
      roles: [
        await this.rolesRepository.findOne({
          name: await this.getRole(createUserDto.app_type),
        }),
      ],
    });
    return this.usersRepository.create(user);
  }

  async addToWishlist(addWishlistDto: AddWishlistDto) {
    const { userId, propertyId } = addWishlistDto;

    const user = await this.findOne(userId.id);

    if (!user.wishlistedProperties.includes(propertyId.id)) {
      user.wishlistedProperties.push(propertyId.id);
      await this.usersRepository.save(user);
    }
    return user;
  }

  private async getRole($app_type) {
    switch ($app_type) {
      case AppTypeEnum.LOCAPAY:
        return RoleEnum.USER;
      case AppTypeEnum.LOCAPAY_BUSINESS:
        return RoleEnum.MANAGER;
      default:
        throw new NotFoundException(`Invalid user type`);
    }
  }
}
