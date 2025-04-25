import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/products/interfaces/product.interface';

export const loadProducts = createAction(
  '[Products] Load',
  props<{ page: number }>()
);
export const loadProductsPage = createAction(
  '[Products] Load Page',
  props<{ page: number }>()
);
export const loadProductsSuccess = createAction(
  '[Products] Load Success',
  props<{ products: Product[] }>()
);
export const loadProductsFailure = createAction(
  '[Products] Load Failure',
  props<{ error: string }>()
);
export const selectProduct = createAction(
  '[Products] Select',
  props<{ productId: number }>()
);
