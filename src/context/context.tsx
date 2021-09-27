import React, { createContext } from "react";
import { IContext } from "./contextTypes";

const defaultValue: IContext = {
  allItems: [],
  searchValue: "",
  cartItems: [],
  favoriteItems: [],
  isLoading: false,
  setSearchValue: () => {},
  addToCartBtn: () => {},
  removeFromCart: () => {},
  itemAddedToCart: () => false,
  itemAddedToFavorite: () => false,
  addToFavorite: () => {},
  setCartItems: () => {},
};

export const Context = createContext<IContext>(defaultValue);
