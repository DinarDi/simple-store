import React from "react";
import { IAllItems } from "../../types";

import img1 from "../../img/img1.png";
import styles from "./OrderItemCard.module.scss";

interface IOrderItemCard {
  item: IAllItems;
}

const OrderItemCard: React.FC<IOrderItemCard> = ({ item }) => {
  return (
    <div className={`${styles.card} p-40 mr-40 mb-20`}>
      <img
        width={112}
        height={112}
        src={img1}
        alt="Sneakers"
        className="mb-15"
      />
      <h5>{item.title}</h5>
    </div>
  );
};

export default OrderItemCard;
