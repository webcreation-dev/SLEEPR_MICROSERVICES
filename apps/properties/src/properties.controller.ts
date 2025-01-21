import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { PropertiesService } from './properties.service';
import { CreatePropertyDto } from './dto/create-property.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import {
  createParseFilePipe,
  File,
  IdDto,
  JwtAuthGuard,
  MaxFileCount,
  CurrentUser,
  RoleEnum,
  Roles,
  User,
} from '@app/common';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { FilenamesDto } from '@app/common/files/dto/filenames.dto';

@Controller()
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @UseInterceptors(FilesInterceptor('files', MaxFileCount.PRODUCT_IMAGES))
  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Body() createPropertyDto: CreatePropertyDto,

    @UploadedFiles(createParseFilePipe('2MB', 'png', 'jpeg'))
    files: File[],

    @CurrentUser()
    user: User,
  ) {
    // console.log(user);

    // return this.propertiesService.create(createPropertyDto, files, user);
    return this.propertiesService.create(createPropertyDto, files, user);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.propertiesService.findOne(id);
  }

  @Patch(':id')
  update(@Param() { id }: IdDto, @Body() updatePropertyDto: UpdatePropertyDto) {
    return this.propertiesService.update(id, updatePropertyDto);
  }
  @Delete(':id')
  async remove(@Param() { id }: IdDto) {
    return this.propertiesService.remove(id);
  }

  @UseInterceptors(FilesInterceptor('files', MaxFileCount.PRODUCT_IMAGES))
  @Post(':id/images')
  addImages(
    @Param('id', ParseIntPipe) id: number,
    @UploadedFiles(createParseFilePipe('2MB', 'png', 'jpeg'))
    files: File[],
  ) {
    return this.propertiesService.addImages(id, files);
  }

  @Delete(':id/images')
  deleteImages(
    @Param('id', ParseIntPipe) id: number,
    @Body() { filenames }: FilenamesDto,
  ) {
    return this.propertiesService.deleteImages(id, filenames);
  }
}
