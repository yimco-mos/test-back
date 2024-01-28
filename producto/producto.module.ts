import { Module } from '@nestjs/common';
import { ProductoController } from './producto.controller';
import { ProductoStoreService } from 'src/producto-store/producto-store.service';
@Module({
  controllers: [ProductoController],
  providers: [ProductoStoreService],
})
export class ProductoModule {}
