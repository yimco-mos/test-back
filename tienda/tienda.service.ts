import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tienda } from './tienda.entity';

@Injectable()
export class TiendaService {
  constructor(
    @InjectRepository(Tienda)
    private readonly tiendaRepository: Repository<Tienda>,
  ) {}

  async findAll(): Promise<Tienda[]> {
    return this.tiendaRepository.find();
  }
  async findOne(id: number): Promise<Tienda | undefined> {
    return this.tiendaRepository.findOne({ where: { id } });
  }

  async create(tienda: Tienda): Promise<Tienda> {
    return this.tiendaRepository.save(tienda);
  }

  async update(id: number, tienda: Tienda): Promise<Tienda> {
    return this.tiendaRepository.save({ ...tienda, id: Number(id) });
  }

  async delete(id: number): Promise<void> {
    await this.tiendaRepository.delete(id);
  }
}
