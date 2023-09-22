export interface FetchData<Type> {
  next: string;
  previous: string;
  results: Type;
}

export interface Category {
  id: number;
  name: string;
}

interface FetchedProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: Category;
}

export type Products = FetchData<FetchedProduct[]>;
