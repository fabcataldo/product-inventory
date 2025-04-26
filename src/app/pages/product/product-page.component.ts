import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/products/interfaces/product.interface';
import { AppState } from 'src/app/shared/interfaces/app-state.interface';

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
  constructor(private store: Store<AppState>, private location: Location) {}

  ngOnInit(): void {
    this.loading = true;
    this.store.subscribe((store) => {
      console.log('store');
      console.log(store);
      if (store) {
        this.loading = false;
        this.product = this.isAddingProduct ? null : store.products!.product!;
        this.isEditingProduct = store.products.isEditingProduct;
        this.isAddingProduct = store.products.isAddingProduct;
      }
    });
  }

  goBack(): void {
    this.location.back();
  }
}
