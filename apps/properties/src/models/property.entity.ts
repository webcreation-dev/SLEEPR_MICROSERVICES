import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '@app/common';

@Entity()
export class Property extends AbstractEntity<Property> {
  @Column()
  timestamp: Date;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  userId: number;

  @Column()
  invoiceId: string;
}
