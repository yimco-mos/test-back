// producto-tienda.entity.ts

import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Producto } from 'src/producto/producto.entity';
import { Tienda } from 'src/tienda/tienda.entity';

@Entity()
export class ProductoTienda {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Producto)
  producto: Producto;

  @ManyToOne(() => Tienda)
  tienda: Tienda;
}
