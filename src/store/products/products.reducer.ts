import { createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/products/interfaces/product.interface';
import * as ProductActions from './products.actions';
import { ProductsByCategoryApiResponse } from 'src/app/products/interfaces/products-by-category-api.response';
import { ProductsApiResponse } from 'src/app/products/interfaces/products-api.response';

export interface ProductsState {
  allProducts: ProductsApiResponse | null;
  isEditingProduct: boolean;
  loading: boolean;
  error: string | null;
  page: number;
  productsByCategory: ProductsByCategoryApiResponse | null;
  product: Product | null;
  isAddingProduct: boolean;
}

const initialState: ProductsState = {
  allProducts: null,
  isEditingProduct: false,
  loading: false,
  error: null,
  page: 0,
  productsByCategory: null,
  product: null,
  isAddingProduct: false,
};

export const productsReducer = createReducer(
  initialState,
  on(ProductActions.loadProducts, (state, { page }) => ({
    ...state,
    loading: true,
    error: null,
    page,
  })),
  on(ProductActions.loadProduct, (state, { id }) => ({
    ...state,
    loading: true,
    error: null,
    id,
  })),
  on(ProductActions.addProduct, (state, { product }) => ({
    ...state,
    loading: true,
    error: null,
    product,
  })),
  on(ProductActions.editProduct, (state, { product }) => ({
    ...state,
    loading: true,
    error: null,
    products: product,
  })),
  on(ProductActions.removeProduct, (state, { product }) => ({
    ...state,
    loading: true,
    error: null,
    product,
  })),
  on(ProductActions.loadProductSuccess, (state, { product }) => ({
    ...state,
    loading: false,
    error: null,
    product,
  })),
  on(ProductActions.addProductSuccess, (state, { product }) => ({
    ...state,
    loading: false,
    error: null,
    product,
  })),
  on(ProductActions.editProductSuccess, (state, { product }) => ({
    ...state,
    loading: false,
    error: null,
    product,
  })),
  on(ProductActions.removeProductSuccess, (state, { product }) => ({
    ...state,
    loading: false,
    error: null,
    product,
  })),
  on(ProductActions.loadProductsByCategory, (state, { categoryText }) => ({
    ...state,
    loading: true,
    error: null,
    categoryText,
  })),
  on(
    ProductActions.loadProductsSuccess,
    (state, { products, totalProducts, currentPage, pageSize }) => ({
      ...state,
      loading: false,
      allProducts: { products, totalProducts, currentPage, pageSize },
    })
  ),
  on(
    ProductActions.loadProductsByCategorySuccess,
    (state, { products, totalProducts, pageSize, currentPage }) => ({
      ...state,
      loading: false,
      productsByCategory: { products, totalProducts, pageSize, currentPage },
    })
  ),
  on(ProductActions.apiProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(ProductActions.activateEditProduct, (state, { isEditing }) => ({
    ...state,
    isEditingProduct: isEditing,
  })),
  on(ProductActions.activateAddProduct, (state, { isAdding }) => ({
    ...state,
    isAddingProduct: isAdding,
  })),
  on(ProductActions.resetProduct, (state) => ({
    ...state,
    isEditingProduct: false,
    isAddingProduct: false,
    product: null,
  }))
);
