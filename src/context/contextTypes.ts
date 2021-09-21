import { IAllItems } from "../types";

export interface IContext {
  allItems: IAllItems[];
  searchValue: string;
  cartItems: IAllItems[];
  favoriteItems: IAllItems[];
  setSearchValue: (value: string) => void;
  addToCartBtn: (product: IAllItems) => void;
  removeFromCart: (id: number) => void;
  itemAddedToCart: (id: number) => boolean;
  itemAddedToFavorite: (id: number) => boolean;
  addToFavorite: (product: IAllItems) => void;
  setCartItems: ([]) => void;
}
