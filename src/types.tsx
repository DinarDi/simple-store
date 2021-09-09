export interface IAllItems {
  id: number;
  title: string;
  price: number;
  plus: boolean;
}

export interface IContext {
  allItems: IAllItems[];
  searchValue: string;
  cartItems: ICartItems[];
  setSearchValue: (value: string) => void;
  addToCartBtn: (id: number, product: ICartItems) => void;
  removeFromCart: (id: number) => void;
}

export interface ICard {
  id: number;
  title: string;
  price: number;
  plus: boolean;
  addToCart: (id: number, product: ICartItems) => void;
}

export interface ICartItems {
  id: number;
  title: string;
  price: number;
}
