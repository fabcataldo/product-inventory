import { LowStockProducts } from './low-stock-products.interface';

export interface DashboardApiResponse {
  totalProducts: number;
  lowStockProducts: LowStockProducts[];
  totalInventoryValue: number;
}
