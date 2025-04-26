import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationsModule } from '../operations/operations.module';
import { ProductsListComponent } from './components/products-list/products-list/products-list.component';
import { ProductComponent } from './components/product/product.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ProductFormModule } from './components/product-form/product-form/product-form.module';

@NgModule({
  declarations: [ProductsListComponent, ProductComponent],
  imports: [
    CommonModule,
    OperationsModule,
    ButtonModule,
    TableModule,
    ProductFormModule,
  ],
  exports: [ProductsListComponent, ProductFormModule, ProductComponent],
})
export class ProductsModule {}
