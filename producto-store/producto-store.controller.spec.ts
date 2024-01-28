import { Test, TestingModule } from '@nestjs/testing';
import { ProductoStoreController } from './producto-store.controller';
import { ProductoStoreService } from './producto-store.service';
import { Producto } from '../producto/producto.entity'; // Importar la clase Producto

describe('ProductoStoreController', () => {
  let controller: ProductoStoreController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductoStoreController],
      providers: [ProductoStoreService],
    }).compile();

    controller = module.get<ProductoStoreController>(ProductoStoreController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // Usar la clase Producto
  it('should create a new Producto object', () => {
    const producto = new Producto(); // Instanciar un objeto Producto
    expect(producto).toBeInstanceOf(Producto);
  });
});

describe('ProductoStoreService', () => {
  let service: ProductoStoreService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductoStoreService],
    }).compile();

    service = module.get<ProductoStoreService>(ProductoStoreService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Usar la clase Producto
  it('should create a new Producto object', () => {
    const producto = new Producto(); // Instanciar un objeto Producto
    expect(producto).toBeInstanceOf(Producto);
  });
});
