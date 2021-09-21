export interface IAllItems {
  id: number;
  title: string;
  price: number;
  imgUrl: string;
}

export interface ICard {
  id: number;
  title: string;
  price: number;
  imgUrl: string;
  addToCart: (product: IAllItems) => void;
  itemAddedToCart: (id: number) => boolean;
  addToFavorite: (product: IAllItems) => void;
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
  imgUrl: string;
  removeItem: (id: number) => void;
}

export interface IOrders {
  id: number;
  items: IAllItems[];
}
