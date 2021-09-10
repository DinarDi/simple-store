import { IAllItems, ICartItems } from "../types";

export interface IContext {
  allItems: IAllItems[];
  searchValue: string;
  cartItems: ICartItems[];
  setSearchValue: (value: string) => void;
  addToCartBtn: (id: number, product: ICartItems) => void;
  removeFromCart: (id: number) => void;
}
