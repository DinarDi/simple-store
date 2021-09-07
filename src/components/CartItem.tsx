import React from "react";

import img1 from "../img/img1.png";
import removeBtn from "../img/removeBtn.svg";

const CartItem = () => {
  return (
    <div className="cartItem d-flex align-center p-20 mb-20">
      <img width={70} height={70} src={img1} alt="Sneakers" className="mr-20" />
      <div className="mr-12">
        <p>Мужские Кроссовки Nike Air Max 270</p>
        <b>12 999 руб.</b>
      </div>
      <img src={removeBtn} alt="Remove" />
    </div>
  );
};

export default CartItem;
