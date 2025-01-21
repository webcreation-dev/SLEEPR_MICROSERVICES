import {
  Inject,
  Injectable,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import {
  User,
  Role,
  RoleEnum,
  AppTypeEnum,
  PROPERTIES_SERVICE,
} from '@app/common';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUserDto } from './dto/get-user.dto';
import { UsersRepository } from './users.repository';
import { RolesRepository } from './roles.repository';
import { NotFoundException } from '@nestjs/common';
import { AddWishlistDto } from './dto/add-wishlist.dto';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly rolesRepository: RolesRepository,
    @Inject(PROPERTIES_SERVICE) private readonly propertiesService: ClientProxy,
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

  async req_auth_to_properties({ id }: User) {
    const user = await this.usersRepository.findOne({ id });
    return this.propertiesService
      .send('res_properties_from_microservices', {
        propertyIds: user.wishlistedProperties,
      })
      .pipe(
        map((res) => {
          // return res;
          return {
            ...user,
            wishlist: res,
          };
        }),
      );
  }

  async getUser({ id }: User) {
    // Récupération de l'utilisateur par son identifiant
    const user = await this.usersRepository.findOne({ id });

    // Vérification que l'utilisateur existe et qu'il a une wishlist
    if (
      user &&
      user.wishlistedProperties &&
      user.wishlistedProperties.length > 0
    ) {
      // Envoi d'une requête au microservice des propriétés pour obtenir les détails des propriétés de la wishlist
      // const properties = await this.propertiesService.send('get_properties', {
      //   propertyIds: user.wishlistedProperties,
      // });
      const properties = await this.propertiesService
        .send('get_properties1', {})
        .pipe(
          map((res) => {
            console.log('Properties wishlisted 1:', res);
            return res;
          }),
        );
      console.log('Properties wishlisted 2:', properties);

      // Retourne l'utilisateur avec les détails des propriétés de sa wishlist
      return {
        ...user,
        wishlist: properties,
      };
    }

    // Si l'utilisateur n'a pas de wishlist ou que l'utilisateur n'existe pas
    return user;
  }
}
