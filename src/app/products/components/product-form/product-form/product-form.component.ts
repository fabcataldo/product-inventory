import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TreeNode } from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';
import { Category } from 'src/app/categories/interfaces/category.interface';
import { SubCategory } from 'src/app/categories/interfaces/subcategory.interface';
import { CategoriesService } from 'src/app/categories/services/categories.service';
import { Product } from 'src/app/products/interfaces/product.interface';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit, OnDestroy {
  @Input() product: Product | null = null;
  productForm: FormGroup;
  private subscriptions$ = new Subject<void>();
  selectedNodes: any;
  categoriesTree: TreeNode[] = [];
  loading = false;
  loadingSubmitButton = false;

  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService
  ) {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      stock: [0, [Validators.required, Validators.min(0)]],
      price: [0, [Validators.required, Validators.min(0)]],
      category: [''],
    });
  }
  ngOnDestroy(): void {
    this.subscriptions$.next();
    this.subscriptions$.complete();
  }

  ngOnInit(): void {
    if (this.product) {
      this.productForm.setValue({
        name: this.product.name,
        stock: this.product.stock,
        price: this.product.price,
        category: this.product.categories,
      });
    }
    this.buildCategoriesTree();
  }

  onSubmit(event: any) {
    event.preventDefault();
    this.loadingSubmitButton = true;

    if (this.productForm.valid) {
      if (this.product) {
      }
    }
  }

  private buildCategoriesTree() {
    this.loading = true;
    this.categoriesService
      .getCategories()
      .pipe(takeUntil(this.subscriptions$))
      .subscribe({
        next: (categoriesApi) => {
          this.categoriesTree = categoriesApi.map((category: Category) => ({
            key: `category-${category.id}`,
            label: category.name,
            children: category.subcategories.map((sub: SubCategory) => ({
              key: `subcategory-${sub.id}`,
              label: sub.name,
            })),
          }));
          this.loading = false;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
