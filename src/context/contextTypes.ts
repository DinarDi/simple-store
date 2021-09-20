import { IAllItems, ICartItems } from "../types";

export interface IContext {
  allItems: IAllItems[];
  searchValue: string;
  cartItems: ICartItems[];
  favoriteItems: IAllItems[];
  setSearchValue: (value: string) => void;
  addToCartBtn: (product: ICartItems) => void;
  removeFromCart: (id: number) => void;
  itemAddedToCart: (id: number) => boolean;
  itemAddedToFavorite: (id: number) => boolean;
  addToFavorite: (product: ICartItems) => void;
  setCartItems: ([]) => void;
}
