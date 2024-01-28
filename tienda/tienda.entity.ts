import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Producto } from 'src/producto/producto.entity';
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

  @OneToMany(() => Producto, (producto) => producto.tienda)
  productos: Producto[]; // Esta propiedad representa la relación inversa
}
