import { createAction, props } from '@ngrx/store';
import { LowStockProducts } from 'src/app/dashboard/interfaces/low-stock-products.interface';

export const loadDashboard = createAction('[Dashboard] Load');
export const loadDashboardSuccess = createAction(
  '[Dashboard] Load Dashboard Success',
  props<{
    totalProducts: number;
    lowStockProducts: LowStockProducts[];
    totalInventoryValue: number;
  }>()
);
export const loadDashboardFailure = createAction(
  '[Dashboard] Load Failure',
  props<{ error: string }>()
);
