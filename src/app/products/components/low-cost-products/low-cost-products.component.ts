import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  Subject,
  takeUntil,
} from 'rxjs';
import { PAGE_SIZE_GET_ALL_PRODUCTS } from '../../helpers/constants';
import getCategoriesNameList from '../../helpers/get-categories-name-list';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'low-cost-products',
  templateUrl: './low-cost-products.component.html',
  styleUrls: ['./low-cost-products.component.css'],
})
export class LowCostProductsComponent implements AfterViewInit, OnInit {
  @ViewChild('searchInputByName') searchInputByName!: ElementRef;
  @Input() products: Product[] = [];
  pageSize = PAGE_SIZE_GET_ALL_PRODUCTS;
  backupedPageSize = 0;
  backupedCurrentPage = 0;
  backupedTotalProducts = 0;
  displayedColumns: string[] = ['name', 'price', 'stock', 'actions'];
  currentPage = 0;
  getCategoriesNameList = getCategoriesNameList;
  totalProducts = 0;
  productSearchedByName = '';
  dataSource: Product[] = [];
  localProducts: Product[] = [];
  loading = false;
  private subscriptions$ = new Subject<void>();

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getLowStockProducts();
  }

  ngAfterViewInit() {
    fromEvent<Event>(this.searchInputByName.nativeElement, 'input')
      .pipe(
        debounceTime(300),
        map((event: Event) => (event.target as HTMLInputElement).value),
        distinctUntilChanged()
      )
      .subscribe((value) => {
        this.productSearchedByName = value;
        this.applyFilter();
      });
  }

  updateTableDataSource() {
    this.dataSource = this.localProducts;
  }

  applyFilter(): void {
    if (!this.isFiltering()) {
      this.pageSize = this.backupedPageSize;
      this.currentPage = this.backupedCurrentPage;
      this.totalProducts = this.backupedTotalProducts;
    } else {
      this.currentPage = 0;
    }
    this.getLowStockProducts();
  }

  private isFiltering() {
    return !!this.productSearchedByName.length;
  }

  onPageChange(event: any) {
    this.pageSize = event.rows;
    this.currentPage = event.first / event.rows;
    this.totalProducts = this.isFiltering()
      ? this.backupedTotalProducts
      : this.totalProducts;

    this.getLowStockProducts();
  }

  getLowStockProducts() {
    this.loading = true;
    this.productsService
      .getLowStockProducts(
        this.currentPage,
        this.pageSize,
        this.productSearchedByName
      )
      .pipe(takeUntil(this.subscriptions$))
      .subscribe({
        next: (apiResponse: any) => {
          this.loading = false;
          this.localProducts = apiResponse.products;
          this.totalProducts = apiResponse.totalProducts;
          this.updateTableDataSource();
          this.backupedPageSize = this.pageSize;
          this.backupedCurrentPage = this.currentPage;
          this.backupedTotalProducts = this.totalProducts;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
