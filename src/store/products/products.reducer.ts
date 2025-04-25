import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/products/interfaces/product.interface';
import * as ProductActions from './products.actions';

export interface ProductsState {
  products: Product[];
  selectedProductId: number | null;
  loading: boolean;
  error: string | null;
  page: number;
}

const initialState: ProductsState = {
  products: [],
  selectedProductId: null,
  loading: false,
  error: null,
  page: 0,
};

export const productsReducer = createReducer(
  initialState,
  on(ProductActions.loadProducts, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(ProductActions.loadProductsPage, (state, { page }) => ({
    ...state,
    loading: true,
    error: null,
    page,
  })),
  on(ProductActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    loading: false,
    products,
  })),
  on(ProductActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
