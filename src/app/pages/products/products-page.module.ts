import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPageRoutingModule } from './products-page-routing.module';
import { ProductsPageComponent } from './products-page.component';
import { OperationsModule } from 'src/app/operations/operations.module';
import { ProductsModule } from 'src/app/products/products.module';
import { SharedComponentsModule } from 'src/app/shared/shared-components.module';

@NgModule({
  declarations: [ProductsPageComponent],
  imports: [
    CommonModule,
    ProductsPageRoutingModule,
    OperationsModule,
    ProductsModule,
    SharedComponentsModule,
  ],
})
export class ProductsPageModule {}
