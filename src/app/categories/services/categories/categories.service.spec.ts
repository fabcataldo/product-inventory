import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { categories } from 'src/helpers/dummy-data';
import { Category } from '../../interfaces/category.interface';
import { CategoriesService } from './categories.service';

describe('CategoriesService', () => {
  let service: CategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CategoriesService] });
    service = TestBed.inject(CategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return categories list successfully', fakeAsync(() => {
    let result: Category[] | undefined;
    service.getCategories().subscribe((data: any) => (result = data));
    expect(result).toBeUndefined();
    tick(1000);
    expect(result).toEqual(categories);
  }));
});
