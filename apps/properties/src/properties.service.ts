import {
  BASE_PATH,
  File,
  FilePath,
  FilteringService,
  MaxFileCount,
  PaginationService,
  StorageService,
  User,
} from '@app/common';
import { Injectable } from '@nestjs/common';
import { PropertiesRepository } from './properties.repository';
import { join } from 'path';
import { pathExists } from 'fs-extra';
import { GalleriesRepository } from './galleries.repository';
import { CreatePropertyDto } from './dto/create-property.dto';
import { Property } from './models/property.entity';
import { Gallery } from './models/gallery.entity';
import { UpdatePropertyDto } from './dto/update-property.dto';

@Injectable()
export class PropertiesService {
  constructor(
    private readonly propertiesRepository: PropertiesRepository,
    private readonly galleriesRepository: GalleriesRepository,
    private readonly storageService: StorageService,
    private readonly paginationService: PaginationService,
    private readonly filteringService: FilteringService,
  ) {}

  async create(
    createPropertyDto: CreatePropertyDto,
    files: File[],
    { id }: User,
  ) {
    // 1. Sauvegarder la propriété en utilisant PropertyRepository
    const property = await this.propertiesRepository.create(
      new Property({
        ...createPropertyDto,
        userId: id,
      }),
    );

    // 2. Sauvegarder les fichiers dans un dossier
    const savedPaths = await this.uploadImages(property.id, files);

    // 3. Créer et sauvegarder chaque galerie
    for (const path of savedPaths) {
      const gallery = new Gallery({
        url: path,
        property,
      });
      await this.galleriesRepository.create(gallery);
    }

    // 4. Retourner la propriété avec ses galeries
    return this.propertiesRepository.findOne(
      { id: property.id },
      { galleries: true },
    );
  }

  async findOne(id: number) {
    return this.propertiesRepository.findOne({ id }, { galleries: true });
  }

  async update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return this.propertiesRepository.findOneAndUpdate(
      { id },
      updatePropertyDto,
    );
  }

  async remove(id: number) {
    await this.propertiesRepository.findOneAndDelete({ id });
    await this.deleteBaseDir(id);
  }

  async addImages(id: number, files: File[]) {
    const property = await this.findOne(id);

    const savedPaths = await this.uploadImages(property.id, files);

    // 3. Créer et sauvegarder chaque galerie
    for (const path of savedPaths) {
      const gallery = new Gallery({
        url: path,
        property, // Associer chaque galerie à la propriété créée
      });
      await this.galleriesRepository.create(gallery);
    }

    return this.findOne(id);
  }

  async deleteImages(id: number, filenames: string[]) {
    await this.findOne(id);

    const { BASE, IMAGES } = FilePath.Products;

    const deleteOperations = filenames.map(async (filename) => {
      const path = join(BASE, id.toString(), IMAGES, filename);

      console.log(path);

      await this.storageService.validatePath(path);

      await this.storageService.delete(path);
      await this.galleriesRepository.findOneAndDelete({ url: filename });
    });

    await Promise.all(deleteOperations);
  }

  async uploadImages(id: number, files: File[]) {
    const { BASE, IMAGES } = FilePath.Products;
    const path = join(BASE, id.toString(), IMAGES);

    if (await pathExists(join(BASE_PATH, path))) {
      const incomingFilecount = files.length;
      const dirFilecount = await this.storageService.getDirFilecount(path);
      const totalFilecount = incomingFilecount + dirFilecount;

      this.storageService.validateFilecount(
        totalFilecount,
        MaxFileCount.PRODUCT_IMAGES,
      );
    }

    await this.storageService.createDir(path);

    const savedPaths = await Promise.all(
      files.map(async (file) => {
        const filePath = await this.storageService.saveFile(path, file);
        return filePath; // Retourne le chemin du fichier sauvegardé
      }),
    );

    return savedPaths;
  }

  private async deleteBaseDir(id: number) {
    const { BASE } = FilePath.Products;

    const path = join(BASE, id.toString());
    await this.storageService.delete(path);
  }
}
