import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TreeNode } from 'primeng/api';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Category } from 'src/app/categories/interfaces/category.interface';
import { SubCategory } from 'src/app/categories/interfaces/subcategory.interface';
import { CategoriesService } from 'src/app/categories/services/categories.service';
import { Product } from 'src/app/products/interfaces/product.interface';
import { AppState } from 'src/app/shared/interfaces/app-state.interface';
import { addProduct } from 'src/store/products/products.actions';

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
  addProduct$: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private store: Store<AppState>
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
    this.addProduct$ = this.store.select((state) => state.products.loading);
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
        this.product.name = this.productForm.get('name')?.value;
        this.product.price = this.productForm.get('price')?.value;
        this.product.stock = this.productForm.get('stock')?.value;
        this.product.categories = this.productForm.get('category')?.value;
        this.store.dispatch(addProduct({ product: this.product }));
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
