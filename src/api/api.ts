import axios from "axios";
import { IAllItems, IOrders } from "../types";

const instance = axios.create({
  baseURL: "https://store-simple.herokuapp.com/",
});

export const fetchAPI = {
  getAllItems() {
    return instance.get<IAllItems[]>(`allItems`);
  },

  getFavoriteItems() {
    return instance.get<IAllItems[]>(`favoriteItems`);
  },

  getCartItems() {
    return instance.get<IAllItems[]>(`cartItems`);
  },

  getOrders() {
    return instance.get<IOrders[]>(`orders`);
  },
};

export const addAPI = {
  addCartItems(product: IAllItems) {
    return instance.post(`cartItems`, product);
  },

  addFavoriteItems(product: IAllItems) {
    return instance.post(`favoriteItems`, product);
  },

  addOrder(items: IAllItems[]) {
    return instance.post(`orders`, { items });
  },
};

export const removeAPI = {
  removeCartItem(id: number) {
    return instance.delete(`cartItems/${id}`);
  },

  removeFavoriteItem(id: number) {
    return instance.delete(`favoriteItems/${id}`);
  },
};
