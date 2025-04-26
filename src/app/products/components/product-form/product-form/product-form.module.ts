import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFormComponent } from './product-form.component';
import { InputTextModule } from 'primeng/inputtext';
import { TreeSelectModule } from 'primeng/treeselect';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriesModule } from 'src/app/categories/categories.module';
import { SharedComponentsModule } from 'src/app/shared/shared-components.module';

@NgModule({
  declarations: [ProductFormComponent],
  imports: [
    CommonModule,
    InputTextModule,
    TreeSelectModule,
    ReactiveFormsModule,
    CategoriesModule,
    SharedComponentsModule,
  ],
  exports: [ProductFormComponent],
})
export class ProductFormModule {}
