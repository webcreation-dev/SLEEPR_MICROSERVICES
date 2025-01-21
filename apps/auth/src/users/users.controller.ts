import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CurrentUser, RoleEnum, Roles, User } from '@app/common';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { AddWishlistDto } from './dto/add-wishlist.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Post('add_wishlist')
  async addWishlist(@Body() addWishlistDto: AddWishlistDto) {
    const email = await this.usersService.addToWishlist(addWishlistDto);
    return email;
  }

  @UseGuards(JwtAuthGuard)
  @Get('one')
  async req_auth_to_properties(@CurrentUser() user: User) {
    return this.usersService.req_auth_to_properties(user);
  }
  @UseGuards(JwtAuthGuard)
  @Get('user')
  async getUser(@CurrentUser() user: User) {
    const getUser = await this.usersService.getUser(user);
    return getUser;
  }

  // @Post('req_auth_to_properties')
  // async req_auth_to_properties() {
  //   return this.usersService.req_auth_to_properties();
  // }
}
