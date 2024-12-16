import { GroceryItem, GroceryList } from './types';

const Grocery = {
  key: 'GROCERY_LIST',
  items: [] as GroceryList,
  init() {
    const contents = localStorage.getItem(Grocery.key);
    if (contents) {
      Grocery.items = JSON.parse(contents);
    } else {
      Grocery.empty();
    }
  },
  sync() {
    localStorage.setItem(Grocery.key, JSON.stringify(Grocery.items));
  },
  findItem(id: string) {
    const match = Grocery.items.filter((item: GroceryItem) => {
      if (item.id == id) return true;
    });
    if (match && match[0]) return match[0];
  },
  addGroceryItem(groceryItem: GroceryItem) {
    Grocery.items.push(groceryItem);
    Grocery.sync();
  },
  editGroceryItem(groceryItem: GroceryItem) {
    Grocery.items = Grocery.items.map((item: GroceryItem) => {
      if (item.id === groceryItem.id) {
        return {
          ...groceryItem,
        };
      }
      return item;
    });

    Grocery.sync();
  },
  deleteGroceryItem(id: string) {
    Grocery.items = Grocery.items.filter((item: GroceryItem) => {
      if (item.id !== id) return true;
    });

    Grocery.sync();
  },
  markItemAsPurchased(id: string) {
    Grocery.items = Grocery.items.map((item: GroceryItem) => {
      if (item.id === id) {
        return { ...item, isPurchased: true };
      }
      return item;
    });
    Grocery.sync();
  },
  unmarkItemAsPurchased(id: string) {
    Grocery.items = Grocery.items.map((item: GroceryItem) => {
      if (item.id === id) {
        return { ...item, isPurchased: false };
      }
      return item;
    });
    Grocery.sync();
  },
  filterByCategory(category: string): GroceryList {
    return Grocery.items.filter((item: GroceryItem) => item.category === category);
  },
  empty() {
    Grocery.items = [];

    Grocery.sync();
  },
};

export default Grocery;
