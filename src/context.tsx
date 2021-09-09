import React, { createContext } from "react";
import { IContext } from "./types";

const defaultValue: IContext = {
  allItems: [],
  searchValue: "",
  cartItems: [],
  setSearchValue: () => {},
  addToCartBtn: () => {},
  removeFromCart: () => {},
};

export const Context = createContext<IContext>(defaultValue);
