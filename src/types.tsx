export interface IAllItems {
  id: number;
  title: string;
  price: number;
}

export interface ICard {
  id: number;
  title: string;
  price: number;
  addToCart: (product: ICartItems) => void;
  itemAddedToCart: (id: number) => boolean;
  addToFavorite: (product: ICartItems) => void;
  itemAddedToFavorite: (id: number) => boolean;
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

export interface IOrders {
  id: number;
  items: IAllItems[];
}
