import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TiendaController } from './tienda.controller';
import { TiendaService } from './tienda.service';
import { Tienda } from './tienda.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tienda])],
  controllers: [TiendaController],
  providers: [TiendaService],
})
export class TiendaModule {}
