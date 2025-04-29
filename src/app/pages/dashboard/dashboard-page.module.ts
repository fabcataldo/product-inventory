import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardPageRoutingModule } from './dashboard-page-routing.module';
import { DashboardPageComponent } from './dashboard-page.component';
import { SharedComponentsModule } from 'src/app/shared/shared-components.module';
import { OperationsModule } from 'src/app/operations/operations.module';
import { FormsModule } from '@angular/forms';
import { ProductsModule } from '../../products/products.module';

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [
    CommonModule,
    DashboardPageRoutingModule,
    SharedComponentsModule,
    OperationsModule,
    FormsModule,
    ProductsModule,
  ],
})
export class DashboardPageModule {}
