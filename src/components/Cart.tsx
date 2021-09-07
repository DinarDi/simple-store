import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import CartItem from "./CartItem";

const Cart = () => {
  const modal = document.createElement("div");
  useEffect(() => {
    document.body.appendChild(modal);
    return () => {
      document.body.removeChild(modal);
    };
  }, []);
  return createPortal(
    <div className="overlay">
      <div className="cart p-30 d-flex flex-column">
        <h2 className="mb-30">Корзина</h2>
        <div className="cartItems">
          <CartItem />
        </div>
        <div className="totalBlock">
          <ul className="mb-24">
            <li>
              <span>Итого: </span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li>
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button>Оформить заказ</button>
        </div>
      </div>
    </div>,
    modal
  );
};

export default Cart;
