import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Product } from '../../interfaces/product.interface';
import { ProductsService } from './products.service';
import { lowStockProducts, products } from 'src/helpers/dummy-data';
import { ProductsApiResponse } from '../../interfaces/products-api.response';
import { PAGE_SIZE_GET_ALL_PRODUCTS } from '../../helpers/constants';

describe('ProductsService', () => {
  let service: ProductsService;
  const page = 0;
  const pageSize = PAGE_SIZE_GET_ALL_PRODUCTS;
  const pageStartIdx = page * pageSize;
  const pageEndIdx = pageStartIdx + pageSize;
  const allProductsSlice = products.slice(pageStartIdx, pageEndIdx);
  const allLowStockProductsSlice = lowStockProducts.slice(
    pageStartIdx,
    pageEndIdx
  );

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsService],
    });
    service = TestBed.inject(ProductsService);
  });

  it('should obtain first 10 products from first page', fakeAsync(() => {
    let resultGetProducts: ProductsApiResponse | undefined;

    const mockProductsApiResponse = {
      products: allProductsSlice,
      totalProducts: products.length,
      pageSize: pageSize,
      currentPage: page,
    };
    service
      .getProducts(page, pageSize)
      .subscribe((res) => (resultGetProducts = res));
    tick(1000);
    expect(resultGetProducts).toEqual(mockProductsApiResponse);
  }));

  it('should create a product successfully', fakeAsync(() => {
    let newProduct: Product = {
      id: products.length,
      name: 'pepe',
      stock: 23,
      price: 239,
    };
    let resultAddProduct: Product = newProduct;

    service.addProduct(newProduct).subscribe((res) => (resultAddProduct = res));
    tick(1000);
    expect(newProduct).toEqual(resultAddProduct);
  }));

  it('should update an existing product', fakeAsync(() => {
    let firstProduct: Product = products[0];

    let productEditted: Product = {
      id: 1,
      name: 'pepe2',
      stock: 23,
      price: 239,
    };
    let resultUpdateProduct: Product = productEditted;

    service
      .updateProduct(productEditted)
      .subscribe((res) => (resultUpdateProduct = res as Product));
    tick(1000);
    expect(productEditted).toEqual(resultUpdateProduct);
  }));

  it('should delete an existing product', fakeAsync(() => {
    const productToDelete: Product = products[0];

    let resultDeleteProduct: Product = productToDelete;

    service
      .deleteProduct(productToDelete)
      .subscribe((res) => (resultDeleteProduct = res as Product));
    tick(1000);
    expect(productToDelete).toEqual(resultDeleteProduct);
  }));

  it('should obtain first 10 low stock products from first page', fakeAsync(() => {
    let resultGetLowStockProducts: ProductsApiResponse | undefined;

    const mockProductsApiResponse = {
      products: allLowStockProductsSlice,
      totalProducts: products.length,
      pageSize: pageSize,
      currentPage: page,
    };
    service
      .getLowStockProducts(page, pageSize)
      .subscribe((res) => (resultGetLowStockProducts = res));
    tick(1000);
    expect(resultGetLowStockProducts).toEqual(mockProductsApiResponse);
  }));
});
