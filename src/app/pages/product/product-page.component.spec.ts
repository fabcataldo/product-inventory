import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPageComponent } from './product-page.component';
import { loadProduct, resetProduct } from 'src/store/products/products.actions';
import { products } from 'src/helpers/dummy-data';
import { MockStore } from '@ngrx/store/testing';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from 'src/store/products/products.reducer';
import { ProductsService } from 'src/app/products/services/products/products.service';

describe('ProductPageComponent', () => {
  let component: ProductPageComponent;
  let fixture: ComponentFixture<ProductPageComponent>;
  let locSpy = jasmine.createSpyObj('Location', ['back']);
  let mockProductService: jasmine.SpyObj<ProductsService>;
  let store: MockStore;
  const mockProduct = products[0];

  beforeEach(async () => {
    locSpy = jasmine.createSpyObj('Location', ['back']);
    mockProductService = jasmine.createSpyObj('ProductService', [
      'loadProduct',
    ]);

    await TestBed.configureTestingModule({
      declarations: [ProductPageComponent],
      imports: [StoreModule.forRoot({ products: productsReducer })],
      providers: [{ provide: ProductsService, useValue: mockProductService }],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(ProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component and dispatch loadProduct', () => {
    expect(component).toBeTruthy();
    store.dispatch(loadProduct({ id: mockProduct.id }));
    expect(store.dispatch).toHaveBeenCalledWith(
      loadProduct({ id: mockProduct.id })
    );
  });

  it('ngOnInit: should select product with action loadProduct and update UI', () => {
    component.loading = true;
    component.product = products[0];

    fixture.detectChanges();

    expect(component.loading).toBeFalse();
    const productDetail = fixture.nativeElement.querySelector('product-detail');
    expect(productDetail).toBeTruthy();
  });

  it('should do goBack() and dispatch of action resetProduct', () => {
    store.dispatch(resetProduct());
    const locationSpy = spyOn(component['location'], 'back');

    const goBackButton = fixture.nativeElement.querySelector('button');
    goBackButton.click();

    expect(store.dispatch).toHaveBeenCalledWith(resetProduct());
    expect(locationSpy).toHaveBeenCalled();
  });
});
