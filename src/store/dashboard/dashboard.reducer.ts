import { createReducer, on } from '@ngrx/store';
import * as DashboardActions from './dashboard.actions';
import { LowStockProducts } from 'src/app/dashboard/interfaces/low-stock-products.interface';

export interface DashboardState {
  totalProducts: number;
  lowStockProducts: LowStockProducts[];
  totalInventoryValue: number;
  loading: boolean;
  error: string | null;
}

const initialState: DashboardState = {
  totalProducts: 0,
  lowStockProducts: [],
  totalInventoryValue: 0,
  loading: false,
  error: null,
};

export const dashboardReducer = createReducer(
  initialState,
  on(DashboardActions.loadDashboard, (state) => ({ ...state, loading: true })),
  on(
    DashboardActions.loadDashboardSuccess,
    (state, { totalProducts, lowStockProducts, totalInventoryValue }) => ({
      ...state,
      totalProducts,
      lowStockProducts,
      totalInventoryValue,
      loading: false,
    })
  ),
  on(DashboardActions.loadDashboardFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
