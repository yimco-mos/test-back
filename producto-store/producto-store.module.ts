import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from '../producto/producto.entity';
import { ProductoStoreService } from './producto-store.service';
import { ProductoStoreController } from './producto-store.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Producto])],
  providers: [ProductoStoreService],
  controllers: [ProductoStoreController],
  exports: [ProductoStoreService],
})
export class ProductoStoreModule {}
