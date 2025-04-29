import { Product } from 'src/app/products/interfaces/product.interface';

export interface DashboardApiResponse {
  totalProducts: number;
  lowStockProducts: Product[];
  totalInventoryValue: number;
}
