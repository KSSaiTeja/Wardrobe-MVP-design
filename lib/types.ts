export interface ClothingItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  color: string;
  occasion: string;
  image: string;
  dateAdded: string;
  gender: string;
  stylePreferences: string[];
  ageGroups: string[];
  budgetRange: number[];
  productUrl?: string; // Made optional for backward compatibility
}

export interface UserPreferences {
  gender: string;
  stylePreference: string[]; // Array for multi-select
  colorPreferences: string[];
  budget: number[];
  age: string;
  occasion: string[]; // Array for multi-select
}
