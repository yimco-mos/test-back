import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { TiendaService } from './tienda.service';
import { Tienda } from './tienda.entity';

@Controller('stores')
export class TiendaController {
  constructor(private readonly tiendaService: TiendaService) {}

  @Get()
  async findAll(): Promise<Tienda[]> {
    return await this.tiendaService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Tienda> {
    return await this.tiendaService.findOne(id);
  }

  @Post()
  async create(@Body() tienda: Tienda): Promise<Tienda> {
    return await this.tiendaService.create(tienda);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() tienda: Tienda,
  ): Promise<Tienda> {
    return await this.tiendaService.update(id, tienda);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return await this.tiendaService.delete(id);
  }
}
