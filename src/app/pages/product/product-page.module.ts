import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPageRoutingModule } from './product-page-routing.module';
import { ProductPageComponent } from './product-page.component';
import { ProductsModule } from 'src/app/products/products.module';
import { OperationsModule } from 'src/app/operations/operations.module';
import { SharedComponentsModule } from 'src/app/shared/shared-components.module';

@NgModule({
  declarations: [ProductPageComponent],
  imports: [
    CommonModule,
    ProductPageRoutingModule,
    ProductsModule,
    OperationsModule,
    SharedComponentsModule,
  ],
})
export class ProductPageModule {}
