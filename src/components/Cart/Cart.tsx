import React, { useContext } from "react";
import { Context } from "../../context/context";
import CartItem from "./CartItem";

import styles from "./Cart.module.scss";
import empty from "../../img/cartEmpty.jpg";
import closeBtn from "../../img/removeBtn.svg";
import { ICart } from "../../types";
import { addAPI, removeAPI } from "../../api/api";

const Cart: React.FC<ICart> = ({ setOpen }) => {
  const { cartItems, removeFromCart, setCartItems } = useContext(Context);
  const total = cartItems.reduce((sum, item) => item.price + sum, 0);

  const sendOrder = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      await addAPI.addOrder(cartItems);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const element = cartItems[i];
        await removeAPI.removeCartItem(element.id);
      }
    } catch (error) {
      alert("Something went wrong. Try again.");
      console.log(error);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={`${styles.cart} p-30 d-flex flex-column`}>
        <div className="d-flex justify-between align-center mb-25">
          <h2>Корзина</h2>
          <img
            className="closeBtnImg cu-p"
            src={closeBtn}
            alt="Close"
            onClick={() => setOpen()}
          />
        </div>

        {cartItems.length ? (
          <>
            <div className={styles.cartItems}>
              {cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  imgUrl={item.imgUrl}
                  removeItem={removeFromCart}
                />
              ))}
            </div>
            <div className={styles.totalBlock}>
              <ul className="mb-20">
                <li>
                  <span>Итого:</span>
                  <div></div>
                  <b>{total} руб.</b>
                </li>
                <li>
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{(total * 5) / 100} руб.</b>
                </li>
              </ul>
              <button className="cu-p" onClick={sendOrder}>
                Оформить заказ
              </button>
            </div>
          </>
        ) : (
          <div
            className={`${styles.noItems} d-flex flex-column align-center justify-center`}
          >
            <img
              className="closeBtnImg"
              width={120}
              height={120}
              src={empty}
              alt="Emty"
            />
            <h3>Корзина пустая</h3>
            <p>Добавьте товар для заказа</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
