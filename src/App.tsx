import React, { useEffect, useState } from "react";

import Routes from "./components/Routes";
import Header from "./components/Header/Header";
import { Context } from "./context/context";
import { IAllItems } from "./types";
import { addAPI, fetchAPI, removeAPI } from "./api/api";

const App: React.FC = () => {
  const [allItems, setAllItems] = useState<IAllItems[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [cartItems, setCartItems] = useState<IAllItems[]>([]);
  const [favoriteItems, setFavoriteItems] = useState<IAllItems[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const cartItemsResponse = await fetchAPI.getCartItems();
        const favoriteItemsResponse = await fetchAPI.getFavoriteItems();
        const allItemsResponse = await fetchAPI.getAllItems();

        setCartItems(cartItemsResponse.data);
        setFavoriteItems(favoriteItemsResponse.data);
        setAllItems(allItemsResponse.data);
      } catch (e) {
        alert("Something went wrong. Please, try again.");
        console.log(e);
      }
    }
    fetchData();
  }, []);

  const addToCartBtn = async (product: IAllItems) => {
    try {
      if (cartItems.find((item) => item.id === product.id)) {
        setCartItems(cartItems.filter((item) => item.id !== product.id));
        await removeAPI.removeCartItem(product.id);
      } else {
        setCartItems([...cartItems, product]);
        await addAPI.addCartItems(product);
      }
    } catch (e) {
      alert("Something went wrong.");
      console.log(e);
    }
  };

  const removeFromCart = async (id: number) => {
    try {
      setCartItems(cartItems.filter((item) => item.id !== id));
      await removeAPI.removeCartItem(id);
    } catch (e) {
      alert("Something went wrong. Try again.");
      console.log(e);
    }
  };

  const addToFavorite = async (product: IAllItems) => {
    try {
      if (favoriteItems.find((item) => item.id === product.id)) {
        setFavoriteItems(
          favoriteItems.filter((item) => item.id !== product.id)
        );
        await removeAPI.removeFavoriteItem(product.id);
      } else {
        setFavoriteItems([...favoriteItems, product]);
        await addAPI.addFavoriteItems(product);
      }
    } catch (e) {
      alert("Something went wrong.");
      console.log(e);
    }
  };

  const itemAddedToCart = (id: number) => {
    return cartItems.some((item) => item.id === id);
  };

  const itemAddedToFavorite = (id: number) => {
    return favoriteItems.some((item) => item.id === id);
  };

  return (
    <Context.Provider
      value={{
        allItems,
        searchValue,
        cartItems,
        favoriteItems,
        setSearchValue,
        addToCartBtn,
        removeFromCart,
        itemAddedToCart,
        addToFavorite,
        itemAddedToFavorite,
        setCartItems,
      }}
    >
      <div className="wrapper clear">
        <Header />
        <Routes />
      </div>
    </Context.Provider>
  );
};

export default App;
