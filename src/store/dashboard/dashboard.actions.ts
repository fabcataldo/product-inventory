import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/products/interfaces/product.interface';

export const loadDashboard = createAction('[Dashboard] Load');
export const loadDashboardSuccess = createAction(
  '[Dashboard] Load Dashboard Success',
  props<{
    totalProducts: number;
    lowStockProducts: Product[];
    totalInventoryValue: number;
  }>()
);
export const loadDashboardFailure = createAction(
  '[Dashboard] Load Failure',
  props<{ error: string }>()
);

export const loadLowStockProducts = createAction(
  '[Products] Load Low Stock Products',
  props<{ page: number; pageSize: number }>()
);
