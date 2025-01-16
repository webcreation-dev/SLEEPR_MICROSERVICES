import { Body, Controller, Get, Post, UploadedFiles } from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { MultipartFormData } from '@app/common/files/decorators/multipart.decorator';
import { CreatePropertyDto } from './dto/create-property.dto';
import { MaxFileCount } from '@app/common/files/utils/file.constant';
import { createParseFilePipe } from '@app/common/files/utils/file-validation.util';

@Controller()
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Post()
  @MultipartFormData(CreatePropertyDto, MaxFileCount.PROPERTY_IMAGES)
  create(
    @Body() createPropertyDto: CreatePropertyDto,
    @UploadedFiles(createParseFilePipe('2MB', 'png', 'jpeg'))
    files: Express.Multer.File[],
  ) {
    console.log(files, createPropertyDto);
    // return this.propertiesService.create(createPropertyDto, files, user);
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
