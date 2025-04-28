import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { delay, Observable, of, switchMap } from 'rxjs';
import { products } from 'src/helpers/dummy-data';
import { PAGE_SIZE_GET_ALL_PRODUCTS } from '../helpers/constants';
import { ProductsApiResponse } from '../interfaces/products-api.response';
import { ProductsByCategoryApiResponse } from '../interfaces/products-by-category-api.response';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor() {}

  getProducts(
    page: number,
    pageSize: number = PAGE_SIZE_GET_ALL_PRODUCTS
  ): Observable<ProductsApiResponse> {
    return of(products).pipe(
      delay(1000),
      switchMap((allProducts: Product[]) => {
        const pageStartIdx = page * pageSize;
        const pageEndIdx = pageStartIdx + pageSize;
        const allProductsSlice: Product[] = allProducts.slice(
          pageStartIdx,
          pageEndIdx
        );
        return of({
          products: allProductsSlice,
          totalProducts: allProducts.length,
          pageSize: pageSize,
          currentPage: page,
        });
      })
    );
  }

  getProduct(id: number): Observable<Product | Error> {
    return of(products).pipe(
      delay(1000),
      switchMap((products: Product[]) => {
        const product = products.find(
          (product) => product.id === id
        ) as Product;
        if (product) {
          return of(product);
        } else {
          throw new Error('Producto no encontrado');
        }
      })
    );
  }

  addProduct(product: Product): Observable<Product | Error> {
    return of(products).pipe(
      delay(1000),
      switchMap((products: Product[]) => {
        product = { ...product, id: products.length };
        products = [...products, product];
        return of(product);
      })
    );
  }
  updateProduct(product: Product): Observable<Product | Error> {
    return of(products).pipe(
      delay(1000),
      switchMap((products: Product[]) => {
        const productIdx = products.findIndex(
          (p) => p.id === product.id
        ) as number;
        if (productIdx >= 0) {
          products[productIdx] = product;
          return of(product);
        } else {
          throw new Error('Producto a actualizar no encontrado');
        }
      })
    );
  }
  deleteProduct(product: Product): Observable<Product | Error> {
    return of(products).pipe(
      delay(1000),
      switchMap((products: Product[]) => {
        const productIdx = products.findIndex(
          (p) => p.id === product.id
        ) as number;

        if (productIdx >= 0) {
          products = products.slice(productIdx, 1);
          return of(product);
        } else {
          throw new Error('Producto no encontrado');
        }
      })
    );
  }

  getProductsByCategory(
    categoryText: string,
    page: number,
    pageSize: number = PAGE_SIZE_GET_ALL_PRODUCTS
  ): Observable<ProductsByCategoryApiResponse> {
    return of(products).pipe(
      delay(1000),
      switchMap((allProducts: Product[]) => {
        const pageStartIdx = page * pageSize;
        const pageEndIdx = pageStartIdx + pageSize;

        const allProductsSlice: Product[] = allProducts.slice(
          pageStartIdx,
          pageEndIdx
        );

        const filteredProducts = allProductsSlice.filter((product) =>
          product.categories!.find((category) =>
            category.name
              .toLocaleLowerCase()
              .includes(categoryText.trim().toLocaleLowerCase())
          )
        );

        return of({
          products: filteredProducts,
          totalProducts: filteredProducts.length,
          pageSize: filteredProducts.length,
          currentPage: page,
        });
      })
    );
  }
}
