import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CurrentUser, RoleEnum, Roles, User } from '@app/common';
import { JwtAuthGuard } from '../guards/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { toogleWishlistDto } from './dto/toogle-wishlist.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Post('toogle_wishlist')
  async addWishlist(@Body() toogleWishlistDto: toogleWishlistDto) {
    const email = await this.usersService.toogleWishlist(toogleWishlistDto);
    return email;
  }
}
