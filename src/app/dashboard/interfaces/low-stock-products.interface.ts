import { Product } from 'src/app/products/interfaces/product.interface';

export interface LowStockProducts {
  product: Product;
  stock: number;
}
