import React, { useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import { Context } from "../context";
import CartItem from "./CartItem";

interface ICart {
  setOpen: () => void;
}

const Cart: React.FC<ICart> = ({ setOpen }) => {
  const { cartItems, removeFromCart } = useContext(Context);
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
        <div className="d-flex justify-between">
          <h2 className="mb-30">Корзина</h2>
          <p className="cu-p" onClick={() => setOpen()}>
            X
          </p>
        </div>

        <div className="cartItems">
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
