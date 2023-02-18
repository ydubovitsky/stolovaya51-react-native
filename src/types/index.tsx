export interface MenuInterface {
  date?: Date;
  menuEntities: MenuEntityInterface[];
}

export interface MenuEntityInterface {
  id: number,
  name: string;
  menuItems: MenuItemInterface[];
}

export interface MenuItemInterface {
  id?: number;
  date?: Date;
  mealTime?: string;
  mealItem?: MealItemInterface;
  cost?: number;
  portion?: string;
  description?: string;
}

export interface MealItemInterface {
  id?: number,
  name?: string;
  calories?: number;
  description?: string;
}

export interface CustomDateInterface {
  day: string,
  month: string,
  year: number
}

export interface MealItemInterface {
  id?: number,
  name?: string;
  calories?: number;
  description?: string;
}

export interface MealStateInterface {
  mealsItemArray: MealItemInterface[];
  status: "idle" | "loading" | "loaded" | "failed";
}

export interface MenuStateInterface {
  menu: MenuInterface;
  status: "idle" | "loading" | "loaded" | "failed";
}