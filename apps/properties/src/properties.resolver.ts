import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
// import { ReservationDocument } from './models/reservation.schema';
// import { CreateReservationDto } from './dto/create-reservation.dto';

import { Property } from "./models/property.entity";
import { PropertiesService } from './properties.service';
// import { CurrentUser, UserDto } from '@app/common';
@Resolver(() => Property)
export class PropertiesResolver {
  constructor(private readonly reservationsService: PropertiesService) {}
  // @Mutation(() => ReservationDocument)
  // createReservation(
  //   @Args('createReservationInput')
  //   createReservationInput: CreateReservationDto,
  //   @CurrentUser() user: UserDto,
  // ) {
  //   return this.reservationsService.create(createReservationInput, user);
  // }
  // @Query(() => [ReservationDocument], { name: 'reservations' })
  // findAll() {
  //   return this.reservationsService.findAll();
  // }
  // @Query(() => ReservationDocument, { name: 'reservation' })
  // findOne(@Args('id', { type: () => String }) id: string) {
  //   return this.reservationsService.findOne(id);
  // }
  // @Mutation(() => ReservationDocument)
  // removeReservation(@Args('id', { type: () => String }) id: string) {
  //   return this.reservationsService.remove(id);
  // }
}