import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Tienda {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  ciudad: string;

  @Column()
  direccion: string;
}
