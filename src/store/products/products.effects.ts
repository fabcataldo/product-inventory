import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProductActions from './products.actions';
import { ProductsService } from 'src/app/products/services/products.service';
import { catchError, map, mergeMap, of } from 'rxjs';
import { totalProducts } from '../../helpers/dummy-data';
import { Product } from 'src/app/products/interfaces/product.interface';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      mergeMap(({ page, pageSize }) =>
        this.productsService.getProducts(page, pageSize).pipe(
          map((productsApi) =>
            ProductActions.loadProductsSuccess({
              products: productsApi.products,
              totalProducts: productsApi.totalProducts,
              pageSize: productsApi.pageSize,
              currentPage: productsApi.currentPage,
            })
          ),
          catchError((error) =>
            of(
              ProductActions.apiProductsFailure({
                error: error.message || 'Error cargando productos',
              })
            )
          )
        )
      )
    )
  );

  loadProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProduct),
      mergeMap(({ id }) =>
        this.productsService.getProduct(id).pipe(
          map((productsApi) =>
            ProductActions.loadProductSuccess({
              product: productsApi as Product,
            })
          ),
          catchError((error) =>
            of(
              ProductActions.apiProductsFailure({
                error: error.message,
              })
            )
          )
        )
      )
    )
  );

  addProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.addProduct),
      mergeMap(({ product }) =>
        this.productsService.addProduct(product).pipe(
          map((productApi) =>
            ProductActions.addProductSuccess({
              product: productApi as Product,
            })
          ),
          catchError((error) =>
            of(
              ProductActions.apiProductsFailure({
                error: error.message,
              })
            )
          )
        )
      )
    )
  );
  editProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.editProduct),
      mergeMap(({ product }) =>
        this.productsService.updateProduct(product).pipe(
          map((productApi) =>
            ProductActions.editProductSuccess({
              product: productApi as Product,
            })
          ),
          catchError((error) =>
            of(
              ProductActions.apiProductsFailure({
                error: error.message,
              })
            )
          )
        )
      )
    )
  );
  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.removeProduct),
      mergeMap(({ product }) =>
        this.productsService.deleteProduct(product).pipe(
          map((productsApi) =>
            ProductActions.removeProductSuccess({
              product: productsApi as Product,
            })
          ),
          catchError((error) =>
            of(
              ProductActions.apiProductsFailure({
                error: error.message,
              })
            )
          )
        )
      )
    )
  );

  loadProductsByCategoryText$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProductsByCategory),
      mergeMap(({ categoryText, page, pageSize }) =>
        this.productsService
          .getProductsByCategory(categoryText, page, pageSize)
          .pipe(
            map((productsApi) =>
              ProductActions.loadProductsByCategorySuccess({
                products: productsApi.products,
                totalProducts: productsApi.totalProducts,
                pageSize: productsApi.pageSize,
                currentPage: page,
              })
            ),
            catchError((error) =>
              of(
                ProductActions.apiProductsFailure({
                  error:
                    error.message || 'Error cargando productos por categoría',
                })
              )
            )
          )
      )
    )
  );
}
