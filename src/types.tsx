export interface IAllItems {
  id: number;
  title: string;
  price: number;
  plus: boolean;
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

export interface ICart {
  setOpen: () => void;
}

export interface ICartItem {
  id: number;
  title: string;
  price: number;
  removeItem: (id: number) => void;
}
