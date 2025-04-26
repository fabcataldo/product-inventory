import { Product } from './product.interface';

export interface ProductsApiResponse {
  products: Product[];
  totalProducts: number;
  pageSize: number;
  currentPage: number;
}
