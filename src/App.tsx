import React, { useState } from "react";

import Routes from "./components/Routes";
import Header from "./components/Header";
import { Context } from "./context";
import { IAllItems, ICartItems } from "./types";

const App = () => {
  const [allItems, setAllItems] = useState<IAllItems[]>([
    {
      id: 1,
      title: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 12999,
      plus: false,
    },
    {
      id: 2,
      title: "Мужские Кроссовки Nike Air Max 270",
      price: 14000,
      plus: false,
    },
    {
      id: 3,
      title: "Мужские Кроссовки Under Armour Curry 8",
      price: 15000,
      plus: false,
    },
    {
      id: 4,
      title: "Кроссовки Puma X Aka Boku Future Rider",
      price: 8999,
      plus: false,
    },
    {
      id: 5,
      title: "Мужские Кроссовки Jordan Air Jordan 11",
      price: 17000,
      plus: false,
    },
  ]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [cartItems, setCartItems] = useState<ICartItems[]>([]);
  console.log(cartItems);

  const addToCartBtn = (id: number, product: ICartItems) => {
    setAllItems(
      allItems.map((item) =>
        item.id === id ? { ...item, plus: !item.plus } : item
      )
    );
    if (cartItems.find((item) => item.id === product.id)) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  const removeFromCart = (id: number) => {
    setAllItems(
      allItems.map((item) =>
        item.id === id ? { ...item, plus: !item.plus } : item
      )
    );
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <Context.Provider
      value={{
        allItems,
        searchValue,
        cartItems,
        setSearchValue,
        addToCartBtn,
        removeFromCart,
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
