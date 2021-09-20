import React from "react";

import img1 from "../../img/img1.png";
import plusOff from "../../img/plusOff.svg";
import plusOn from "../../img/plusOn.svg";
import favoriteOn from "../../img/favoriteOn.svg";
import favoriteOff from "../../img/favoriteOff.svg";
import { ICard } from "../../types";

import styles from "./Card.module.scss";

const Card: React.FC<ICard> = ({
  id,
  title,
  price,
  addToCart,
  itemAddedToCart,
  addToFavorite,
  itemAddedToFavorite,
}) => {
  return (
    <div className={`${styles.card} p-40 mr-40 mb-40`}>
      <div className={styles.favorite}>
        <img
          width={32}
          height={32}
          src={itemAddedToFavorite(id) ? favoriteOn : favoriteOff}
          alt="Favorite"
          onClick={() => addToFavorite({ id, title, price })}
        />
      </div>
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
          src={itemAddedToCart(id) ? plusOn : plusOff}
          alt="plus"
          onClick={() => addToCart({ id, title, price })}
        />
      </div>
    </div>
  );
};

export default Card;
