import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body
} from '@nestjs/common';
import { ProductoStoreService } from './producto-store.service';
@Controller('producto-store')
export class ProductoStoreController {
  constructor(private readonly productoStoreService: ProductoStoreService) {}

  @Get()
  async findAll() {
    return await this.productoStoreService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.productoStoreService.findOne(id);
  }

  @Post()
  async create(@Body() createDto: any) {
    return await this.productoStoreService.create(createDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateDto: any) {
    return await this.productoStoreService.update(id, updateDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    await this.productoStoreService.remove(id);
    return { message: 'Producto eliminado exitosamente' };
  }
}
