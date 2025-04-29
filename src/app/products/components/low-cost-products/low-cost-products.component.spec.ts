import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowCostProductsComponent } from './low-cost-products.component';

describe('LowCostProductsComponent', () => {
  let component: LowCostProductsComponent;
  let fixture: ComponentFixture<LowCostProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowCostProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowCostProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
