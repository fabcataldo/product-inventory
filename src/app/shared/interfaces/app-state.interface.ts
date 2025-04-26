import { ProductsState } from 'src/store/products/products.reducer';
import { DashboardState } from '../../../store/dashboard/dashboard.reducer';

export interface AppState {
  products: ProductsState;
  dashboard: DashboardState;
}
