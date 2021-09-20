import React, { useContext, useEffect } from "react";
import { Context } from "../../context/context";
import CartItem from "./CartItem";

import styles from "./Cart.module.scss";
import { ICart } from "../../types";
import axios from "axios";

const Cart: React.FC<ICart> = ({ setOpen }) => {
  const { cartItems, removeFromCart, setCartItems } = useContext(Context);
  const total = cartItems.reduce((sum, item) => item.price + sum, 0);

  const sendOrder = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      await axios.post("http://localhost:3000/orders", {
        items: cartItems,
      });
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const element = cartItems[i];
        await axios.delete(`http://localhost:3000/cartItems/${element.id}`);
      }
    } catch (error) {
      alert("Something went wrong. Try again.");
      console.log(error);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={`${styles.cart} p-30 d-flex flex-column`}>
        <div className="d-flex justify-between">
          <h2 className="mb-30">Корзина</h2>
          <p className="cu-p" onClick={() => setOpen()}>
            X
          </p>
        </div>

        <div className={styles.cartItems}>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              removeItem={removeFromCart}
            />
          ))}
        </div>
        <div className={styles.totalBlock}>
          <ul className="mb-20">
            <li>
              <span>Итого: </span>
              <div></div>
              <b>{total} руб. </b>
            </li>
            <li>
              <span>Налог 5%: </span>
              <div></div>
              <b>{(total * 5) / 100} руб. </b>
            </li>
          </ul>
          <button className="cu-p" onClick={sendOrder}>
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
