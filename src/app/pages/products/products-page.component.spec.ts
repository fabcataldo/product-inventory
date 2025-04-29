import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPageComponent } from './products-page.component';
import { CommonModule } from '@angular/common';
import { OperationsModule } from 'src/app/operations/operations.module';
import { ProductsModule } from 'src/app/products/products.module';
import { SharedComponentsModule } from 'src/app/shared/shared-components.module';
import { ProductsPageRoutingModule } from './products-page-routing.module';

describe('ProductsPageComponent', () => {
  let component: ProductsPageComponent;
  let fixture: ComponentFixture<ProductsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsPageComponent],
      imports: [
        CommonModule,
        ProductsPageRoutingModule,
        OperationsModule,
        ProductsModule,
        SharedComponentsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
