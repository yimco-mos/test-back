import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Tienda } from 'src/tienda/tienda.entity';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  storeId: number; // Mantienes el campo storeId en Producto

  @ManyToOne(() => Tienda, (tienda) => tienda.productos)
  tienda: Tienda;
}
