import {
  Body,
  Controller,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { createParseFilePipe, File, MaxFileCount } from '@app/common';

@Controller()
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @UseInterceptors(FilesInterceptor('files', MaxFileCount.PRODUCT_IMAGES))
  @Post()
  uploadImages(
    @Body() createPropertyDto: CreatePropertyDto,
    @UploadedFiles(createParseFilePipe('2MB', 'png', 'jpeg'))
    files: File[],
  ) {
    return this.propertiesService.create(createPropertyDto, files);
  }

  // @Public()
  // @Get()
  // findAll(@Query() propertiesQueryDto: PropertiesQueryDto) {
  //   return this.propertiesService.findAll(propertiesQueryDto);
  // }

  // @Get(':id')
  // async findOne(@Param() { id }: IdDto) {
  //   console.log(id);
  //   return this.propertiesService.findOne(id);
  // }

  // @Roles(Role.MANAGER)
  // @Patch(':id')
  // update(@Param() { id }: IdDto, @Body() updatePropertyDto: UpdatePropertyDto) {
  //   return this.propertiesService.update(id, updatePropertyDto);
  // }

  // @Roles(Role.MANAGER)
  // @Patch(':id/images')
  // @MultipartFormData(FilesSchema, MaxFileCount.PROPERTY_IMAGES)
  // addGallery(
  //   @Param() { id }: IdDto,
  //   @UploadedFiles(createParseFilePipe('2MB', 'png', 'jpeg'))
  //   files: Express.Multer.File[],
  // ) {
  //   return this.propertiesService.addGallery(id, files);
  // }

  // @Roles(Role.MANAGER)
  // @Delete(':id/images')
  // removeGallery(
  //   @Param() { id }: IdDto,
  //   @Body() removeGalleryDto: RemoveGalleryDto,
  // ) {
  //   return this.propertiesService.removeGallery(id, removeGalleryDto);
  // }

  // @Roles(Role.ADMIN)
  // @Delete(':id')
  // remove(@Param() { id }: IdDto) {
  //   return this.propertiesService.remove(id);
  // }

  // @Get('user/properties')
  // findPropertiesByUser(@CurrentUser() user: User) {
  //   return this.propertiesService.findPropertiesByUser(user);
  // }

  // @Post('wishlist/:id')
  // toggleWishlist(@CurrentUser() user: User, @Param() { id }: IdDto) {
  //   return this.propertiesService.toggleWishlist(user, id);
  // }

  // @Get('user/wishlist')
  // getWishlist(@CurrentUser() user: User) {
  //   return this.propertiesService.getUserWishlist(user);
  // }
}
