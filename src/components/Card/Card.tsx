import React from "react";

import img1 from "../../img/img1.png";
import plusOff from "../../img/plusOff.svg";
import plusOn from "../../img/plusOn.svg";
import { ICard } from "../../types";

import styles from "./Card.module.scss";

const Card: React.FC<ICard> = ({ id, title, price, plus, addToCart }) => {
  return (
    <div className={`${styles.card} p-40 mr-40 mb-40`}>
      <img
        width={112}
        height={112}
        src={img1}
        alt="Sneakers"
        className="mb-15"
      />
      <h5 className="mb-15">{title}</h5>
      <div className="d-flex justify-between">
        <div>
          <p>Цена:</p>
          <b>{price} руб.</b>
        </div>
        <img
          width={32}
          height={32}
          src={plus ? plusOn : plusOff}
          alt="plus"
          onClick={() => addToCart(id, { id: id, title: title, price: price })}
        />
      </div>
    </div>
  );
};

export default Card;
