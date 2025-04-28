import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardPageRoutingModule } from './dashboard-page-routing.module';
import { DashboardPageComponent } from './dashboard-page.component';
import { SharedComponentsModule } from 'src/app/shared/shared-components.module';
import { OperationsModule } from 'src/app/operations/operations.module';

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [
    CommonModule,
    DashboardPageRoutingModule,
    SharedComponentsModule,
    OperationsModule,
  ],
})
export class DashboardPageModule {}
