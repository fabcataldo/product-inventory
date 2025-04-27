import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  Observable,
  Subject,
  takeUntil,
} from 'rxjs';
import { PAGE_SIZE_GET_ALL_PRODUCTS } from 'src/app/products/helpers/constants';
import { ProductsByCategoryApiResponse } from 'src/app/products/interfaces/products-by-category-api.response';
import { Product } from 'src/app/products/interfaces/product.interface';
import { DashboardState } from 'src/store/dashboard/dashboard.reducer';
import {
  activateEditProduct,
  loadProduct,
  loadProducts,
  loadProductsByCategory,
} from 'src/store/products/products.actions';
import { ProductsState } from 'src/store/products/products.reducer';
import { ProductsApiResponse } from 'src/app/products/interfaces/products-api.response';
import { Router } from '@angular/router';
import { AppState } from 'src/app/shared/interfaces/app-state.interface';
import { activateAddProduct } from '../../../../../store/products/products.actions';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild(MatSort) sort: MatSort | null = null;
  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild('searchInputByCategory') searchInputByCategory!: ElementRef;
  products$: Observable<ProductsApiResponse | null>;
  productsByCategory$: Observable<ProductsByCategoryApiResponse | null>;
  currentPage = 0;
  pageSize = PAGE_SIZE_GET_ALL_PRODUCTS;
  backupedPageSize = 0;
  backupedCurrentPage = 0;
  backupedTotalProducts = 0;
  displayedColumns: string[] = ['name', 'price', 'stock', 'actions'];

  totalProducts = 0;
  productSearchedByCategory = '';
  dataSource: Product[] = [];
  subscriptions$ = new Subject<void>();
  filteredProducts: Product[] = [];
  localProducts: Product[] = [];
  loading = false;

  constructor(private store: Store<AppState>, private router: Router) {
    this.products$ = this.store.select((state) => state.products.allProducts);
    this.products$
      .pipe(takeUntil(this.subscriptions$))
      .subscribe((allProducts) => {
        if (allProducts) {
          this.loading = false;
          this.localProducts = allProducts.products;
          this.totalProducts = allProducts.totalProducts;
          this.updateTableDataSource();
          this.backupedPageSize = this.pageSize;
          this.backupedCurrentPage = this.currentPage;
          this.backupedTotalProducts = this.totalProducts;
        }
      });

    this.productsByCategory$ = this.store.select(
      (state) => state.products.productsByCategory
    );

    this.productsByCategory$
      .pipe(takeUntil(this.subscriptions$))
      .subscribe((response) => {
        console.log('loadProductsByCategorySuccess');
        console.log(response);
        if (response) {
          this.loading = false;
          this.filteredProducts = response.products;
          this.pageSize = response.pageSize;
          this.currentPage = response.currentPage;
          this.totalProducts = response.totalProducts;
          this.updateTableDataSource(true);
        }
      });
  }

  ngOnDestroy(): void {
    this.subscriptions$.next();
    this.subscriptions$.complete();
  }

  ngOnInit(): void {
    this.getProducts();
  }

  ngAfterViewInit() {
    fromEvent<Event>(this.searchInputByCategory.nativeElement, 'input')
      .pipe(
        debounceTime(300),
        map((event: Event) => (event.target as HTMLInputElement).value),
        distinctUntilChanged()
      )
      .subscribe((value) => {
        this.productSearchedByCategory = value;
        this.applyFilter();
      });
  }

  getProducts() {
    this.loading = true;
    this.store.dispatch(loadProducts({ page: this.currentPage }));
  }

  goToDetailPage(id: number) {
    this.store.dispatch(loadProduct({ id: id }));
    this.router.navigate(['/product-detail']);
  }

  goToEditPage(id: number) {
    this.store.dispatch(loadProduct({ id: id }));
    this.store.dispatch(activateEditProduct({ isEditing: true }));
    this.router.navigate(['/product-detail']);
  }

  showDeleteModal(id: number) {}

  updateTableDataSource(isFiltering?: boolean) {
    console.log('isFiltering');
    console.log(isFiltering);
    this.dataSource = isFiltering ? this.filteredProducts : this.localProducts;
  }

  applyFilter(): void {
    console.log('productSearchedByCategory');
    console.log(this.productSearchedByCategory);
    if (!this.productSearchedByCategory.length) {
      this.pageSize = this.backupedPageSize;
      this.currentPage = this.backupedCurrentPage;
      this.totalProducts = this.backupedTotalProducts;
      this.updateTableDataSource();
    } else {
      this.loading = true;
      this.currentPage = 0;
      this.store.dispatch(
        loadProductsByCategory({
          categoryText: this.productSearchedByCategory,
          page: this.currentPage,
        })
      );
    }
  }

  goToCreateProductPage() {
    this.store.dispatch(activateAddProduct({ isAdding: true }));
    this.router.navigate(['/product-detail']);
  }

  onPageChange(event: any) {
    this.pageSize = event.rows;
    this.currentPage = event.first / event.rows;
    this.totalProducts = this.filteredProducts
      ? this.backupedTotalProducts
      : this.totalProducts;
    if (!!this.searchInputByCategory.nativeElement.value.length) {
      this.applyFilter();
    } else {
      this.getProducts();
    }
  }

  sortData(sort: Sort) {
    let data = this.localProducts.slice();

    if (!sort.active || sort.direction === '') {
      this.localProducts = data;
      return;
    }

    data = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return this.compareTableItems(a.name, b.name, isAsc);
        case 'price':
          return this.compareTableItems(a.price, b.price, isAsc);
        case 'stock':
          return this.compareTableItems(a.stock, b.stock, isAsc);
        default:
          return 0;
      }
    });
    this.localProducts = data;
    this.updateTableDataSource();
  }

  private compareTableItems(
    a: number | string | undefined,
    b: number | string | undefined,
    isAsc: boolean
  ) {
    return (a!! < b!! ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
