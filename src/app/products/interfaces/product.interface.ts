import { Category } from 'src/app/categories/interfaces/category.interface';
import { Operation } from 'src/app/operations/interfaces/operation.interface';

export interface Product {
  id: number;
  name: string;
  stock: number;
  price: number;
  categories: Category[];
  operations: Operation[];
}
