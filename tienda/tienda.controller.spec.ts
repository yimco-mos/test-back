// src/tienda/tienda.controller.ts
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { TiendaService } from './tienda.service';
import { Tienda } from './tienda.entity';

@Controller('stores')
export class TiendaController {
  constructor(private readonly tiendaService: TiendaService) {}

  @Get()
  async findAll(): Promise<Tienda[]> {
    return this.tiendaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Tienda> {
    return this.tiendaService.findOne(id);
  }

  @Post()
  async create(@Body() storeData: Tienda): Promise<Tienda> {
    return this.tiendaService.create(storeData);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() storeData: Tienda): Promise<Tienda> {
    return this.tiendaService.update(id, storeData);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.tiendaService.delete(id);
  }
}
