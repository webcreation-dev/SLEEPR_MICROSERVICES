import { Type } from 'class-transformer';
import {
  IsDate,
  IsDefined,
  IsNotEmptyObject,
  ValidateNested,
} from 'class-validator';

export class CreatePropertyDto {
  @IsDate()
  @Type(() => Date)
  startDate: Date;

  // @IsDate()
  // @Type(() => Date)
  // endDate: Date;

  // @IsDefined()
  // @IsNotEmptyObject()
  // @ValidateNested()
  // @Type(() => CreateChargeDto)
  // charge: CreateChargeDto;
}
