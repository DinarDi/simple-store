import React, { createContext } from "react";
import { IContext } from "./contextTypes";

const defaultValue: IContext = {
  allItems: [],
  searchValue: "",
  cartItems: [],
  setSearchValue: () => {},
  addToCartBtn: () => {},
  removeFromCart: () => {},
};

export const Context = createContext<IContext>(defaultValue);
