import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationsListComponent } from './components/operations-list/operations-list.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [OperationsListComponent],
  imports: [CommonModule, TableModule],
  exports: [OperationsListComponent],
})
export class OperationsModule {}
