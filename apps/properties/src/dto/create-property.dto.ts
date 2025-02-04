import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateIf,
} from 'class-validator';
import { WaterMeterTypeEnum } from '../enums/water_meter_type.enum';
import { PaintEnum } from '../enums/paint.enum';
import { SanitaryEnum } from '../enums/sanitary.enum';
import { ElectricityMeterTypeEnum } from '../enums/electricity_meter_type.enum';
import { ElectricityPersonalMeterTypeEnum } from '../enums/electricity_personal_meter_type.enum';
import { Field, InputType } from '@nestjs/graphql';

export class CreatePropertyDto {
  @IsNumber()
  @IsNotEmpty()
  @Field()
  number_rooms: number;

  @IsNumber()
  @IsNotEmpty()
  @Field()
  number_living_rooms: number;

  @IsNumber()
  @IsNotEmpty()
  @Field()
  rent_price: number;

  @IsBoolean()
  @IsNotEmpty()
  @Field()
  is_prepaid: boolean;

  @IsNumber()
  @IsNotEmpty()
  @Field()
  month_advance: number;

  @IsNumber()
  @IsNotEmpty()
  @Field()
  number_households: number;

  @IsBoolean()
  @IsNotEmpty()
  @Field()
  is_terace: boolean;

  @IsBoolean()
  @IsNotEmpty()
  @Field()
  is_fence: boolean;

  @IsNumber()
  @IsNotEmpty()
  @Field()
  water_commission: number;

  @IsEnum(PaintEnum)
  @IsNotEmpty()
  @Field(() => PaintEnum)
  paint: PaintEnum;

  @IsEnum(SanitaryEnum)
  @IsNotEmpty()
  @Field(() => SanitaryEnum)
  sanitary: SanitaryEnum;

  @IsEnum(WaterMeterTypeEnum)
  @IsNotEmpty()
  @Field(() => WaterMeterTypeEnum)
  water_meter_type: WaterMeterTypeEnum;

  @ValidateIf((o) => o.water_meter_type === WaterMeterTypeEnum.FORAGE)
  @IsNumber()
  @IsNotEmpty()
  @Field({nullable: true})
  water_drilling_rate: number;

  @IsNumber()
  @IsNotEmpty()

  electricity_commission: number;

  @IsEnum(ElectricityMeterTypeEnum)
  @IsNotEmpty()
  electricity_meter_type: ElectricityMeterTypeEnum;

  @ValidateIf(
    (o) => o.electricity_meter_type === ElectricityMeterTypeEnum.DECOUNTER,
  )
  @IsNumber()
  @IsNotEmpty()
  electricity_decounter_meter_rate: number;

  @ValidateIf(
    (o) => o.electricity_meter_type === ElectricityMeterTypeEnum.PERSONAL,
  )
  @IsEnum(ElectricityPersonalMeterTypeEnum)
  @IsNotEmpty()
  electricity_personal_meter_type: ElectricityPersonalMeterTypeEnum;

  @IsString() 
  @IsNotEmpty()
  @Field()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  @Field()
  visit_price: number;

  @IsString()
  @IsNotEmpty()
  @Field()
  longitude: string;

  @IsString()
  @IsNotEmpty()
  @Field()
  latitude: string;
}
