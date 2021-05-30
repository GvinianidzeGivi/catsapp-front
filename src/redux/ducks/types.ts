import { Category, Cat } from '../../domain/models';

export interface CatsState {
  selectedCategoryId: number | null;
  pageLimit: number;
  categories: Category[];
  results: Cat[];
}

export interface AppState {
  cats: CatsState;
}
