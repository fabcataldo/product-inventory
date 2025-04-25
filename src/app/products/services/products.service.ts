import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { delay, Observable, of, switchMap } from 'rxjs';
import { products } from 'src/helpers/dummy-data';
import { PAGE_SIZE_GET_ALL_PRODUCTS } from '../helpers/constants';
import { ProductApiResponse } from '../interfaces/product-api.response';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor() {}

  getProducts(page: number): Observable<ProductApiResponse> {
    if (page !== 0) {
      --page;
    }

    page = Math.max(0, page);

    return of(products).pipe(
      delay(1000),
      switchMap((allProducts: Product[]) => {
        const pageStartIdx = page * PAGE_SIZE_GET_ALL_PRODUCTS;
        const pageEndIdx = pageStartIdx + page;
        const allProductsSlice: Product[] = allProducts.slice(
          pageStartIdx,
          pageEndIdx
        );
        return of({
          products: allProductsSlice,
          totalProducts: allProducts.length,
        });
      })
    );
  }
}
