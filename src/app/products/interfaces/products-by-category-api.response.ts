import { Product } from './product.interface';

export interface ProductsByCategoryApiResponse {
  products: Product[];
  totalProducts: number;
  pageSize: number;
  currentPage: number;
}
