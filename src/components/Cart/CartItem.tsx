import React from "react";

import removeBtn from "../../img/removeBtn.svg";
import { ICartItem } from "../../types";
import styles from "./CartItem.module.scss";

const CartItem: React.FC<ICartItem> = ({
  id,
  price,
  title,
  imgUrl,
  removeItem,
}) => {
  return (
    <div className={`${styles.cartItem} d-flex align-center p-20 mb-20`}>
      <img
        width={70}
        height={70}
        src={imgUrl}
        alt="Sneakers"
        className="mr-20"
      />
      <div className="mr-12">
        <p>{title}</p>
        <b>{price} руб.</b>
      </div>
      <img src={removeBtn} alt="Remove" onClick={() => removeItem(id)} />
    </div>
  );
};

export default CartItem;
