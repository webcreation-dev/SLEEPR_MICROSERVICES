import {
  BASE_PATH,
  File,
  FilePath,
  FilteringService,
  MaxFileCount,
  PaginationService,
  StorageService,
} from '@app/common';
import { Injectable } from '@nestjs/common';
import { PropertiesRepository } from './properties.repository';
import { join } from 'path';
import { pathExists } from 'fs-extra';
import { GalleriesRepository } from './galleries.repository';
import { CreatePropertyDto } from './dto/create-property.dto';
import { Property } from './models/property.entity';
import { Gallery } from './models/gallery.entity';

@Injectable()
export class PropertiesService {
  constructor(
    private readonly propertiesRepository: PropertiesRepository,
    private readonly galleriesRepository: GalleriesRepository,
    private readonly storageService: StorageService,
    private readonly paginationService: PaginationService,
    private readonly filteringService: FilteringService,
  ) {}

  async create(createPropertyDto: CreatePropertyDto, files: File[]) {
    // 1. Sauvegarder la propriété en utilisant PropertyRepository
    const property = await this.propertiesRepository.create(
      new Property(createPropertyDto),
    );

    // 2. Sauvegarder les fichiers dans un dossier
    const savedPaths = await this.uploadImages(files);

    // 3. Créer et sauvegarder chaque galerie
    for (const path of savedPaths) {
      const gallery = new Gallery({
        url: path,
        property, // Associer chaque galerie à la propriété créée
      });
      await this.galleriesRepository.create(gallery);
    }

    // 4. Retourner la propriété avec ses galeries
    return this.propertiesRepository.findOne(
      { id: property.id },
      { galleries: true },
    );
  }

  async uploadImages(files: File[]) {
    const { BASE, IMAGES } = FilePath.Products;
    const path = join(BASE, IMAGES);

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
}
