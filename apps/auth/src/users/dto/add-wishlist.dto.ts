import { IdDto } from '@app/common';
import { IsEntity } from '@app/common/usual/decorators/validators/is-entity.decorator';

export class AddWishlistDto {
  @IsEntity()
  readonly userId: IdDto;

  @IsEntity()
  readonly propertyId: IdDto;
}
