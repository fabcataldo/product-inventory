import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DashboardState } from 'src/store/dashboard/dashboard.reducer';
import { LowStockProducts } from 'src/app/dashboard/interfaces/low-stock-products.interface';
import { ProductsState } from 'src/store/products/products.reducer';
import { loadDashboard } from 'src/store/dashboard/dashboard.actions';

@Component({
  selector: 'dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
})
export class DashboardPageComponent implements OnInit {
  totalProducts = 0;
  lowStockProducts: LowStockProducts[] = [];
  totalInventoryValue = 0;
  loading = false;
  constructor(
    private store: Store<{ products: ProductsState; dashboard: DashboardState }>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadDashboard());
    this.loading = true;
    this.store
      .select((state) => state)
      .subscribe((resp) => {
        console.log(resp);
        this.loading = false;
        this.totalProducts = resp.dashboard.totalProducts;
        this.lowStockProducts = resp.dashboard.lowStockProducts;
        this.totalInventoryValue = resp.dashboard.totalInventoryValue;
      });
  }
}
