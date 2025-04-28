import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
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
import {
  activateEditProduct,
  loadProduct,
  loadProducts,
  loadProductsByCategory,
  removeProduct,
} from 'src/store/products/products.actions';
import { ProductsApiResponse } from 'src/app/products/interfaces/products-api.response';
import { Router } from '@angular/router';
import { AppState } from 'src/app/shared/interfaces/app-state.interface';
import { activateAddProduct } from '../../../../../store/products/products.actions';
import { Category } from 'src/app/categories/interfaces/category.interface';
import {
  ConfirmationService,
  MessageService,
  ConfirmEventType,
} from 'primeng/api';
import { ProductsState } from 'src/store/products/products.reducer';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  providers: [ConfirmationService],
})
export class ProductsListComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('searchInputByCategory') searchInputByCategory!: ElementRef;
  products$: Observable<ProductsState | null>;
  productsByCategory$: Observable<ProductsState | null>;
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

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
    this.products$ = this.store.select((state) => state.products);
    this.products$
      .pipe(takeUntil(this.subscriptions$))
      .subscribe((stateProducts) => {
        if (stateProducts && stateProducts.allProducts) {
          this.loading = stateProducts.loading;
          this.localProducts = stateProducts.allProducts.products;
          this.totalProducts = stateProducts.allProducts.totalProducts;
          this.updateTableDataSource();
          this.backupedPageSize = this.pageSize;
          this.backupedCurrentPage = this.currentPage;
          this.backupedTotalProducts = this.totalProducts;
        }
      });

    this.productsByCategory$ = this.store.select((state) => state.products);

    this.productsByCategory$
      .pipe(takeUntil(this.subscriptions$))
      .subscribe((response) => {
        if (response && response.productsByCategory) {
          this.loading = response.loading;
          this.filteredProducts = response.productsByCategory.products;
          this.pageSize = response.productsByCategory.pageSize;
          this.currentPage = response.productsByCategory.currentPage;
          this.totalProducts = response.productsByCategory.totalProducts;
          this.updateTableDataSource();
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
    this.store.dispatch(
      loadProducts({ page: this.currentPage, pageSize: this.pageSize })
    );
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

  showDeleteModal(product: Product) {
    this.confirmationService.confirm({
      message: 'Desea eliminar este producto?',
      header: 'Confirmar eliminación',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.store.dispatch(removeProduct({ product }));
        this.getProducts();
      },
      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({
              severity: 'error',
              summary: 'Rejected',
              detail: 'You have rejected',
            });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({
              severity: 'warn',
              summary: 'Cancelled',
              detail: 'You have cancelled',
            });
            break;
        }
      },
    });
  }

  updateTableDataSource() {
    this.dataSource = this.isFiltering()
      ? this.filteredProducts
      : this.localProducts;
  }

  applyFilter(): void {
    if (this.isFiltering()) {
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
          pageSize: this.pageSize,
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
    this.totalProducts = this.isFiltering()
      ? this.backupedTotalProducts
      : this.totalProducts;
    if (!!this.searchInputByCategory.nativeElement.value.length) {
      this.applyFilter();
    } else {
      this.getProducts();
    }
  }

  private isFiltering() {
    return !!this.productSearchedByCategory.length;
  }

  getCategoriesNameList(categories: Category[]) {
    return categories?.length
      ? categories.map((category) => category.name).join(', ')
      : '';
  }
}
