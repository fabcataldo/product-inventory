import { Product } from './product.interface';

export interface ProductApiResponse {
  products: Product[];
  totalProducts: number;
}
