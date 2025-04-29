import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Product } from '../../interfaces/product.interface';
import { ProductsService } from './products.service';
import { products } from 'src/helpers/dummy-data';
import { ProductsApiResponse } from '../../interfaces/products-api.response';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpMock: HttpTestingController;
  const page = 0;
  const pageSize = 10;
  const pageStartIdx = page * pageSize;
  const pageEndIdx = pageStartIdx + pageSize;
  const allProductsSlice: Product[] = products.slice(pageStartIdx, pageEndIdx);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService],
    });
    service = TestBed.inject(ProductsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('should obtain first 10 products from first page', fakeAsync(() => {
    let resultGetProducts: ProductsApiResponse | undefined;

    const mockProductsApiResponse = {
      products: allProductsSlice,
      totalProducts: products.length,
      pageSize: pageSize,
      currentPage: page,
    };

    service.getProducts(0, 10).subscribe((res) => (resultGetProducts = res));
    tick(1000);
    expect(resultGetProducts).toEqual(mockProductsApiResponse);
  }));

  it('should create a product successfully', fakeAsync(() => {
    let newProduct: Product = {
      id: 23173,
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
    let firstProduct: Product = {
      id: 23173,
      name: 'pepe',
      stock: 23,
      price: 239,
    };

    let productEditted: Product = {
      id: 23173,
      name: 'pepe2',
      stock: 23,
      price: 239,
    };
    let resultUpdateProduct: Product = productEditted;

    service
      .updateProduct(firstProduct)
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
});
