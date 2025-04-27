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
import { addProduct, editProduct } from 'src/store/products/products.actions';

@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit, OnDestroy {
  product: Product | null = null;
  productForm: FormGroup;
  private subscriptions$ = new Subject<void>();
  selectedNodes: any;
  categoriesTree: TreeNode[] = [];
  loading = false;
  loadingSubmitButton = false;
  addEditProduct$: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private store: Store<AppState>
  ) {
    this.addEditProduct$ = this.store.select((state) => state.products);
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      stock: [0, [Validators.required, Validators.min(0)]],
      price: [0, [Validators.required, Validators.min(0)]],
      category: [''],
    });
    this.addEditProduct$
      .pipe(takeUntil(this.subscriptions$))
      .subscribe((productsState) => {
        if (productsState) {
          this.loading = false;
          this.product = productsState.product;
          if (this.product) {
            this.productForm.setValue({
              name: this.product.name,
              stock: this.product.stock,
              price: this.product.price,
              category: this.product.categories,
            });
          }
        }
      });
  }
  ngOnDestroy(): void {
    this.productForm.reset();
    this.subscriptions$.next();
    this.subscriptions$.complete();
  }

  ngOnInit(): void {
    this.buildCategoriesTree();
  }

  onSubmit(event: any) {
    event.preventDefault();
    this.loadingSubmitButton = true;

    if (this.productForm.valid) {
      let productForSave = {
        id: 0,
        name: '',
        stock: 0,
        price: 0,
        operations: [],
        categories: [],
      };
      productForSave.name = this.productForm.get('name')?.value;
      productForSave.price = this.productForm.get('price')?.value;
      productForSave.stock = this.productForm.get('stock')?.value;
      productForSave.categories = this.productForm.get('category')?.value;
      productForSave.operations = [];
      if (!this.product) {
        this.store.dispatch(addProduct({ product: productForSave }));
      } else {
        this.store.dispatch(editProduct({ product: productForSave }));
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
