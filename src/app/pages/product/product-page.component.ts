import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/products/interfaces/product.interface';
import { AppState } from 'src/app/shared/interfaces/app-state.interface';
import { CustomNavigationService } from 'src/app/shared/services/custom-navigation.service';
import { resetProduct } from 'src/store/products/products.actions';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  isEditingProduct = false;
  isAddingProduct = false;
  product: Product | null = null;
  loading = false;
  isGoingLastPage = false;

  constructor(
    private store: Store<AppState>,
    private customNavigationService: CustomNavigationService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.store.subscribe((store) => {
      if (store && !this.isGoingLastPage) {
        this.loading = false;
        this.product = this.isAddingProduct ? null : store.products!.product!;
        this.isEditingProduct = store.products.isEditingProduct;
        this.isAddingProduct = store.products.isAddingProduct;
      }
    });
  }

  goBack(): void {
    this.isGoingLastPage = true;
    this.store.dispatch(resetProduct());
    this.customNavigationService.navigateToRoot();
  }
}
