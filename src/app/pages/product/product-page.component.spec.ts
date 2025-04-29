import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPageComponent } from './product-page.component';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { loadProduct, resetProduct } from 'src/store/products/products.actions';
import { By } from '@angular/platform-browser';
import { products } from 'src/helpers/dummy-data';

describe('ProductPageComponent', () => {
  let component: ProductPageComponent;
  let fixture: ComponentFixture<ProductPageComponent>;
  const storeSpy = jasmine.createSpyObj('Store', ['dispatch', 'select']);
  const locSpy = jasmine.createSpyObj('Location', ['back']);
  const mockProduct = products[0];

  beforeEach(async () => {
    storeSpy.select.and.returnValue(
      of({
        loading: false,
        product: mockProduct,
        isEditingProduct: true,
        isAddingProduct: false,
      })
    );
    await TestBed.configureTestingModule({
      declarations: [ProductPageComponent],
      providers: [
        { provide: Store, useValue: storeSpy },
        { provide: Location, useValue: locSpy },
      ],
    }).compileComponents();
    await TestBed.configureTestingModule({
      declarations: [ProductPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render product info with id:1', () => {
    expect(storeSpy.dispatch).toHaveBeenCalledWith(
      loadProduct({ id: mockProduct.id })
    );
    const title = fixture.debugElement.query(By.css('span')).nativeElement;
    expect(title.textContent).toContain(mockProduct.name);
  });
});
