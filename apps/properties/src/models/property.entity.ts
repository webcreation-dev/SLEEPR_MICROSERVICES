import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from '@app/common';
import { Gallery } from './gallery.entity';
import { WaterMeterTypeEnum } from '../enums/water_meter_type.enum';
import { PaintEnum } from '../enums/paint.enum';
import { SanitaryEnum } from '../enums/sanitary.enum';
import { ElectricityMeterTypeEnum } from '../enums/electricity_meter_type.enum';
import { ElectricityPersonalMeterTypeEnum } from '../enums/electricity_personal_meter_type.enum';
import { Field, ObjectType } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Property extends AbstractEntity<Property> {
  @Column()
  @Field()
  number_rooms: number;

  @Column()
  @Field()
  number_living_rooms: number;

  @Column()
  @Field()
  rent_price: number;

  @Column()
  @Field()
  is_prepaid: boolean;

  @Column()
  @Field()
  month_advance: number;

  @Column()
  @Field()
  number_households: number;

  @Column()
  @Field()
  is_terace: boolean;

  @Column()
  @Field()
  is_fence: boolean;

  @Column()
  @Field()
  description: string;

  @Column()
  @Field()
  visit_price: number;

  @Column()
  @Field()
  water_commission: number;

  @Column({ nullable: true })
  @Field()
  water_drilling_rate: number;

  @Column()
  @Field()
  electricity_commission: number;

  @Column({ nullable: true })
  @Field()
  electricity_decounter_meter_rate: number;

  @Column({ default: true })
  @Field()
  is_active: boolean;

  @Column('decimal', { precision: 10, scale: 6 })
  @Field()
  latitude: string;

  @Column('decimal', { precision: 10, scale: 6 })
  @Field()
  longitude: string;

  @Column()
  @Field()
  userId: number;

  @Column({
    type: 'enum',
    enum: WaterMeterTypeEnum,
    enumName: 'water_meter_type_enum',
  })
  @Field()
  water_meter_type: WaterMeterTypeEnum;

  @Column({
    type: 'enum',
    enum: PaintEnum,
    enumName: 'paint_enum',
  })
  @Field()
  paint: PaintEnum;

  @Column({
    type: 'enum',
    enum: SanitaryEnum,
    enumName: 'sanitary_enum',
  })
  @Field()
  sanitary: SanitaryEnum;

  @Column({
    type: 'enum',
    enum: ElectricityMeterTypeEnum,
    enumName: 'electricity_meter_type_enum',
  })
  @Field()
  electricity_meter_type: ElectricityMeterTypeEnum;

  @Column({
    type: 'enum',
    enum: ElectricityPersonalMeterTypeEnum,
    enumName: 'electricity_personal_meter_type_enum',
    nullable: true,
  })
  @Field()
  electricity_personal_meter_type: ElectricityPersonalMeterTypeEnum;

  @OneToMany(() => Gallery, (gallery) => gallery.property, { cascade: true })
  @Field(() => [Gallery])
  galleries: Gallery[];
}
