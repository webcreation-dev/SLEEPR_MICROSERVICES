import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { CurrentUser, JwtAuthGuard, User } from '@app/common';
import { MessagePattern } from '@nestjs/microservices';
import { ValidationPipe, UsePipes } from '@nestjs/common';

@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  // @UseGuards(JwtAuthGuard)
  @Post()
  async create(
    @Body() createReservationDto: CreateReservationDto,
    // @CurrentUser() user: User,
  ) {
    return this.reservationsService.create(createReservationDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll() {
    return this.reservationsService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string) {
    return this.reservationsService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  async update(
    @Param('id') id: string,
    @Body() updateReservationDto: UpdateReservationDto,
  ) {
    return this.reservationsService.update(+id, updateReservationDto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  // @Roles('Admin')
  async remove(@Param('id') id: string) {
    return this.reservationsService.remove(+id);
  }

  @MessagePattern('test')
  @UsePipes(new ValidationPipe())
  async test() {
    return { amount: 1000 };
  }

  @MessagePattern('test1')
  @UsePipes(new ValidationPipe())
  async test1() {
    return { amount: 1000 };
  }
}