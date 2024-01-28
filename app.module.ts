import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoModule } from './producto/producto.module'; // Asegúrate de que la ruta sea correcta

@Module({
  imports: [TypeOrmModule.forRoot(), ProductoModule],
})
export class AppModule {}
