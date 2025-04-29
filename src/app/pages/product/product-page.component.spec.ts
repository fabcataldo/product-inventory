import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPageComponent } from './product-page.component';
import { of } from 'rxjs';
import { loadProduct, resetProduct } from 'src/store/products/products.actions';
import { By } from '@angular/platform-browser';
import { products } from 'src/helpers/dummy-data';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { CommonModule } from '@angular/common';
import { OperationsModule } from 'src/app/operations/operations.module';
import { ProductsModule } from 'src/app/products/products.module';
import { SharedComponentsModule } from 'src/app/shared/shared-components.module';
import { ProductPageRoutingModule } from './product-page-routing.module';

describe('ProductPageComponent', () => {
  let component: ProductPageComponent;
  let fixture: ComponentFixture<ProductPageComponent>;
  let locSpy = jasmine.createSpyObj('Location', ['back']);
  let store: MockStore;
  const mockProduct = products[0];
  const initialState = {
    products: {
      product: mockProduct,
      isEditingProduct: true,
      isAddingProduct: false,
      loading: false,
    },
  };

  beforeEach(async () => {
    locSpy = jasmine.createSpyObj('Location', ['back']);

    await TestBed.configureTestingModule({
      declarations: [ProductPageComponent],
      imports: [
        CommonModule,
        ProductPageRoutingModule,
        ProductsModule,
        OperationsModule,
        SharedComponentsModule,
      ],
      providers: [
        provideMockStore({ initialState }),
        { provide: Location, useValue: locSpy },
      ],
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
    const title = fixture.debugElement.query(By.css('span')).nativeElement;
    expect(title.textContent).toContain(mockProduct.name);
  });

  it('should do goBack() and dispatch of action resetProduct', () => {
    const button = fixture.nativeElement.querySelector(
      'button[aria-label="detail button"]'
    );
    console.log('button');
    console.log(button);
    button.click();
    component.goBack();
    expect(store.dispatch).toHaveBeenCalledWith(resetProduct());
    expect(locSpy.back).toHaveBeenCalled();
  });
});
