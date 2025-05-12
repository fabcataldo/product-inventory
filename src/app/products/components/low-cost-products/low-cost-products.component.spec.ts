import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowCostProductsComponent } from './low-cost-products.component';
import { ProductsService } from '../../services/products/products.service';
import { ProductsModule } from '../../products.module';
import { PAGE_SIZE_GET_ALL_PRODUCTS } from '../../helpers/constants';
import { Product } from '../../interfaces/product.interface';
import { lowStockProducts } from 'src/helpers/dummy-data';
import { from } from 'rxjs';

describe('LowCostProductsComponent', () => {
  let component: LowCostProductsComponent;
  let fixture: ComponentFixture<LowCostProductsComponent>;
  const pageStartIdx = 0;
  const pageEndIdx = pageStartIdx + PAGE_SIZE_GET_ALL_PRODUCTS;
  let allLowStockProductsSlice: Product[] = lowStockProducts.slice(
    pageStartIdx,
    pageEndIdx
  );

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LowCostProductsComponent],
      providers: [ProductsService],
      imports: [ProductsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(LowCostProductsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show low cost products table with no filtering', () => {
    const callFakeBody = {
      products: allLowStockProductsSlice,
      totalProducts: lowStockProducts.length,
      pageSize: PAGE_SIZE_GET_ALL_PRODUCTS,
      currentPage: 0,
    };

    spyOn(component.productsService, 'getLowStockProducts').and.callFake(() =>
      from([callFakeBody])
    );
    spyOn(component, 'updateTableDataSource').and.callThrough();

    fixture.detectChanges();
    expect(component.updateTableDataSource).toHaveBeenCalled();

    expect(component.totalProducts).toEqual(lowStockProducts.length);
    expect(component.backupedPageSize).toEqual(component.pageSize);
    expect(component.backupedCurrentPage).toEqual(component.currentPage);
    expect(component.backupedTotalProducts).toEqual(component.totalProducts);
    expect(component.localProducts.length).toBeGreaterThan(0);
    expect(component.localProducts).toEqual(allLowStockProductsSlice);
  });

  it('should show low cost products table filtering by name, with the text "amortiguador" ', () => {
    const filteringText = 'amortiguador';
    allLowStockProductsSlice = allLowStockProductsSlice.filter((product) =>
      product.name
        .trim()
        .toLowerCase()
        .includes(filteringText.trim().toLowerCase())
    );

    const callFakeBody = {
      products: allLowStockProductsSlice,
      totalProducts: lowStockProducts.length,
      pageSize: PAGE_SIZE_GET_ALL_PRODUCTS,
      currentPage: 0,
    };
    spyOn(component.productsService, 'getLowStockProducts').and.callFake(() =>
      from([callFakeBody])
    );
    spyOn(component, 'updateTableDataSource').and.callThrough();
    fixture.detectChanges();
    expect(component.updateTableDataSource).toHaveBeenCalled();
    expect(component.totalProducts).toEqual(lowStockProducts.length);
    expect(component.backupedPageSize).toEqual(component.pageSize);
    expect(component.backupedCurrentPage).toEqual(component.currentPage);
    expect(component.backupedTotalProducts).toEqual(component.totalProducts);
    expect(component.localProducts.length).toBeGreaterThan(0);
    expect(component.localProducts).toEqual(allLowStockProductsSlice);
  });
});
