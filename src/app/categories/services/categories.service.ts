import { Injectable } from '@angular/core';
import { delay, Observable, of, switchMap } from 'rxjs';
import { Category } from '../interfaces/category.interface';
import { categories } from 'src/helpers/dummy-data';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  getCategories(): Observable<Category[]> {
    return of(categories).pipe(
      delay(1000),
      switchMap((categories: Category[]) => {
        return of(categories);
      })
    );
  }
}
