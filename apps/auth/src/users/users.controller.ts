import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CurrentUser, RoleEnum, Roles, User } from '@app/common';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @Roles(RoleEnum.ADMIN)
/*************  ✨ Codeium Command ⭐  *************/
/**
 * Retrieves the current authenticated user.
 *
 * @param user - The current user obtained from the authentication context.
 * @returns The user object.
 */

/******  76ac71f9-07e4-45fc-89e8-d01bb99aa5b1  *******/
  async getUser(@CurrentUser() user: User) {
    return user;
  }
}
