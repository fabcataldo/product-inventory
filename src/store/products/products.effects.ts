import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import * as ProductActions from './products.actions';
import { ProductsService } from 'src/app/products/services/products.service';
import { catchError, exhaustMap, map, mergeMap, of, tap } from 'rxjs';
import * as productsReducers from './products.reducer';
import { Store } from '@ngrx/store';

@Injectable()
export class ProductsEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      mergeMap(({ page }) =>
        this.productsService.getProducts(page).pipe(
          map((productsApi) =>
            ProductActions.loadProductsSuccess({
              products: productsApi.products,
            })
          ),
          catchError((error) =>
            of(
              ProductActions.loadProductsFailure({
                error: error.message || 'Error cargando productos',
              })
            )
          )
        )
      )
    )
  );
}
