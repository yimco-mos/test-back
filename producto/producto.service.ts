import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { Producto } from './producto.entity';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
  ) {}

  async findAll(): Promise<Producto[]> {
    return await this.productoRepository.find();
  }

  async findOne(id: number): Promise<Producto | undefined> {
    const options: FindOneOptions<Producto> = { where: { id } };
    return await this.productoRepository.findOne(options);
  }

  async create(producto: Producto): Promise<Producto> {
    return await this.productoRepository.save(producto);
  }

  async update(id: number, producto: Producto): Promise<Producto> {
    return await this.productoRepository.save({ ...producto, id });
  }

  async remove(id: number): Promise<void> {
    await this.productoRepository.delete(id);
  }
}
