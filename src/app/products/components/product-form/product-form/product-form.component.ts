import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TreeNode } from 'primeng/api';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Category } from 'src/app/categories/interfaces/category.interface';
import { SubCategory } from 'src/app/categories/interfaces/subcategory.interface';
import { CategoriesService } from 'src/app/categories/services/categories/categories.service';
import { Product } from 'src/app/products/interfaces/product.interface';
import { AppState } from 'src/app/shared/interfaces/app-state.interface';
import { CustomNavigationService } from 'src/app/shared/services/custom-navigation.service';
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
  categoriesSelected: any;

  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private store: Store<AppState>,
    private customNavigationService: CustomNavigationService
  ) {
    this.addEditProduct$ = this.store.select((state) => state.products);
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      stock: ['', [Validators.required]],
      price: ['', [Validators.required]],
      category: [],
    });
    this.productForm.controls['category'].valueChanges.subscribe((value) => {
      this.categoriesSelected = value;
    });
    this.addEditProduct$
      .pipe(takeUntil(this.subscriptions$))
      .subscribe((productsState) => {
        if (productsState) {
          this.loading = false;
          if (!!productsState.product) {
            this.product = productsState.product! as Product;
            this.productForm.setValue({
              name: this.product.name,
              stock: this.product.stock,
              price: this.product.price,
              category:
                this.product.categories?.length === 0
                  ? []
                  : this.categoriesToCategoriesTreeMapper(
                      this.product.categories!
                    ),
            });
          }
        }
      });
  }
  ngOnDestroy(): void {
    this.resetValues();
    this.subscriptions$.next();
    this.subscriptions$.complete();
  }

  ngOnInit(): void {
    this.buildCategoriesTree();
  }

  onSubmit(event: any) {
    event.preventDefault();
    this.loadingSubmitButton = true;
    console.log('this.productForm');
    console.log(this.productForm);
    if (this.productForm.valid) {
      this.loadingSubmitButton = false;
      let productForSave = {
        id: 0,
        name: '',
        stock: 0,
        price: 0,
        operations: [],
        categories: [],
      };
      productForSave.name = this.productForm.get('name')?.value;
      productForSave.price = Number(this.productForm.get('price')?.value);
      productForSave.stock = Number(this.productForm.get('stock')?.value);

      const finalValue = this.productForm.controls['category'].value.map(
        (category: any) => ({
          id: Number(category.key),
          name: category.label,
          subcategories: category.children.map((child: any) => ({
            id: Number(child.key.split('-')[1]),
            name: child.label,
          })),
        })
      );

      productForSave.categories = finalValue;
      productForSave.operations = [];

      if (!this.product) {
        this.store.dispatch(addProduct({ product: productForSave }));
      } else {
        this.store.dispatch(editProduct({ product: productForSave }));
      }
      this.resetValues();
      this.customNavigationService.navigateToRoot();
    } else {
      this.loadingSubmitButton = false;
      this.productForm.markAllAsTouched();
    }
  }

  private resetValues() {
    this.loadingSubmitButton = false;
    this.productForm.reset({
      name: '',
      stock: 0,
      price: 0,
      category: [],
    });
    this.categoriesSelected = null;
  }

  private buildCategoriesTree() {
    this.loading = true;
    this.categoriesService
      .getCategories()
      .pipe(takeUntil(this.subscriptions$))
      .subscribe({
        next: (categoriesApi) => {
          this.categoriesTree = categoriesApi.map((category: Category) => ({
            key: `${category.id}`,
            label: category.name,
            children: category.subcategories.map((sub: SubCategory) => ({
              key: `${category.id}-${sub.id}`,
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

  private categoriesToCategoriesTreeMapper(categories: Category[]) {
    return categories.map((category: Category) => ({
      key: `${category.id}`,
      label: category.name,
      children: category.subcategories.map((sub: SubCategory) => ({
        key: `${category.id}-${sub.id}`,
        label: sub.name,
      })),
    }));
  }
}
