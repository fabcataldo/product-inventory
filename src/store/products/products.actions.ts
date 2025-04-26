import { createAction, props } from '@ngrx/store';
import { ProductsApiResponse } from 'src/app/products/interfaces/products-api.response';
import { ProductsByCategoryApiResponse } from 'src/app/products/interfaces/products-by-category-api.response';
import { Product } from 'src/app/products/interfaces/product.interface';

export const loadProducts = createAction(
  '[Products] Load Products',
  props<{ page: number }>()
);
export const loadProduct = createAction(
  '[Products] Load Product',
  props<{ id: number }>()
);
export const loadProductsByCategory = createAction(
  '[Products] Load Products By Category',
  props<{ page: number; categoryText: string }>()
);
export const loadProductsByCategorySuccess = createAction(
  '[Products] Load Products By CategorySuccess',
  props<ProductsByCategoryApiResponse>()
);
export const loadProductsSuccess = createAction(
  '[Products] Load Products Success',
  props<ProductsApiResponse>()
);
export const loadProductSuccess = createAction(
  '[Products] Load Product Success',
  props<{ product: Product }>()
);
export const apiProductsFailure = createAction(
  '[Products] API Products Failure',
  props<{ error: string }>()
);
export const addProduct = createAction(
  '[Products] Add Product',
  props<{ product: Product }>()
);
export const editProduct = createAction(
  '[Products] Edit Product',
  props<{ product: Product }>()
);
export const removeProduct = createAction(
  '[Products] Remove Product',
  props<{ product: Product }>()
);

export const addProductSuccess = createAction(
  '[Products] Add Product',
  props<{ product: Product }>()
);
export const editProductSuccess = createAction(
  '[Products] Edit Product',
  props<{ product: Product }>()
);
export const removeProductSuccess = createAction(
  '[Products] Remove Product',
  props<{ product: Product }>()
);

export const activateEditProduct = createAction(
  '[Products] Activate Edit Product',
  props<{ isEditing: boolean }>()
);

export const activateAddProduct = createAction(
  '[Products] Activate Add Product',
  props<{ isAdding: boolean }>()
);
