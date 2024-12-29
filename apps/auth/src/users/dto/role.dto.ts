import { RoleEnum } from '@app/common';
import { IsNotEmpty, IsEnum } from 'class-validator';

export class RoleDto {

  @IsEnum(RoleEnum)
  @IsNotEmpty()
  name: RoleEnum;
}