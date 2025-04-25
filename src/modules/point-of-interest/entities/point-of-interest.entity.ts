import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('points_of_interest')
export class PointOfInterest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'integer' })
  x: number;

  @Column({ type: 'integer' })
  y: number;
}
