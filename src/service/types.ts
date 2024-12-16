export enum GroceryCategory {
  Fruits = 'Fruits',
  Dairy = 'Dairy',
  Vegetables = 'Vegetables',
}

export interface GroceryItem {
  id: string;
  name: string;
  quantity: number;
  category: GroceryCategory;
  isPurchased: boolean;
}

export type GroceryList = GroceryItem[];

export interface GroceryItemForm extends Omit<GroceryItem, 'id' | 'category'> {
  category: GroceryCategory | null;
}
