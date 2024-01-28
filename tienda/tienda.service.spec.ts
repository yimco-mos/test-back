import { Injectable } from '@nestjs/common';
import { Tienda } from './tienda.entity';
@Injectable()
export class TiendaService {
    private tiendas: Tienda[] = [];

    findAll(): Tienda[] {
        return this.tiendas;
    }

    findOne(id: number): Tienda {
        return this.tiendas.find(tienda => tienda.id === id);
    }

    create(tienda: Tienda): void {
        this.tiendas.push(tienda);
    }

    update(id: number, tienda: Tienda): void {
        const index = this.tiendas.findIndex(t => t.id === id);
        if (index !== -1) {
            this.tiendas[index] = tienda;
        }
    }

    delete(id: number): void {
        this.tiendas = this.tiendas.filter(tienda => tienda.id !== id);
    }
}
