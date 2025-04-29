import { Category } from 'src/app/categories/interfaces/category.interface';

export default function getCategoriesNameList(categories: Category[]) {
  return categories?.length
    ? categories.map((category) => category.name).join(', ')
    : '';
}
