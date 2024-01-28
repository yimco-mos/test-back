import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from '../producto/producto.entity';
@Injectable()
export class ProductoStoreService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
  ) {}

  async findAll(): Promise<Producto[]> {
    return await this.productoRepository.find();
  }

  async findOne(id: number): Promise<Producto> {
    return await this.productoRepository.findOne({ where: { id } });
  }

  async create(producto: Producto): Promise<Producto> {
    return await this.productoRepository.save(producto);
  }

  async update(id: number, producto: Producto): Promise<Producto> {
    return await this.productoRepository.save({ ...producto, id: Number(id) });
  }

  async remove(id: number): Promise<void> {
    await this.productoRepository.delete(id);
  }

  async addStoreToProduct(productId: number, storeId: number): Promise<void> {
    const producto = await this.productoRepository.findOne(productId);
    if (!producto) {
      throw new Error('Producto no encontrado');
    }
    if (producto.storeId && producto.storeId === storeId) {
      throw new Error('El producto ya está asociado a una tienda');
    }
    producto.storeId = storeId;
    await this.productoRepository.save(producto);
  }

  async findStoresFromProduct(productId: number): Promise<number | null> {
    const producto = await this.productoRepository.findOne(productId);
    if (!producto) {
      throw new Error('Producto no encontrado');
    }
    return producto.storeId || null;
  }

  async findStoreFromProduct(
    productId: number,
    storeId: number,
  ): Promise<number | null> {
    const producto = await this.productoRepository.findOne(productId);
    if (!producto) {
      throw new Error('Producto no encontrado');
    }
    if (!producto.storeId || producto.storeId !== storeId) {
      return null;
    }
    return storeId;
  }

  async updateStoresFromProduct(
    productId: number,
    storeId: number,
    newStoreId: number,
  ): Promise<void> {
    const producto = await this.productoRepository.findOne(productId);
    if (!producto) {
      throw new Error('Producto no encontrado');
    }
    if (!producto.storeId || producto.storeId !== storeId) {
      throw new Error('La tienda no está asociada al producto');
    }
    producto.storeId = newStoreId;
    await this.productoRepository.save(producto);
  }

  async deleteStoreFromProduct(
    productId: number,
    storeId: number,
  ): Promise<void> {
    const producto = await this.productoRepository.findOne(productId);
    if (!producto) {
      throw new Error('Producto no encontrado');
    }
    if (!producto.storeId || producto.storeId !== storeId) {
      throw new Error('La tienda no está asociada al producto');
    }
    producto.storeId = null;
    await this.productoRepository.save(producto);
  }
}
