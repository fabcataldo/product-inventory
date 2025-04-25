import { SubCategory } from './subcategory.interface';

export interface Category {
  id: number;
  name: string;
  subcategories: SubCategory[];
}
