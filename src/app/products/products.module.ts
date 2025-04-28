import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationsModule } from '../operations/operations.module';
import { ProductsListComponent } from './components/products-list/products-list/products-list.component';
import { ProductComponent } from './components/product/product.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ProductFormModule } from './components/product-form/product-form/product-form.module';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [ProductsListComponent, ProductComponent],
  imports: [
    CommonModule,
    OperationsModule,
    ButtonModule,
    TableModule,
    ProductFormModule,
    SharedComponentsModule,
    ConfirmDialogModule,
  ],
  exports: [
    ProductsListComponent,
    ProductFormModule,
    ProductComponent,
    SharedComponentsModule,
  ],
})
export class ProductsModule {}
