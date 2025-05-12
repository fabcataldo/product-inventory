import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { products } from 'src/helpers/dummy-data';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.product = products[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show product', () => {
    const componentCompiled = fixture.nativeElement as HTMLElement;
    expect(
      componentCompiled.querySelector('#productNameDetailLabel')?.textContent
    ).toContain('Detalles del producto Stay Amortiguador');
    expect(
      componentCompiled.querySelector('#productPrice')?.textContent
    ).toContain('$998.04');
    expect(
      componentCompiled.querySelector('#productStock')?.textContent
    ).toContain('69');
  });
});
