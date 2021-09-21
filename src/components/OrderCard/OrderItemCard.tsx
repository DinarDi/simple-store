import React from "react";
import { IAllItems } from "../../types";

import styles from "./OrderItemCard.module.scss";

interface IOrderItemCard {
  item: IAllItems;
}

const OrderItemCard: React.FC<IOrderItemCard> = ({ item }) => {
  return (
    <div className={`${styles.card} p-40 mb-20`}>
      <img
        width={112}
        height={112}
        src={item.imgUrl}
        alt="Sneakers"
        className="mb-15"
      />
      <h5>{item.title}</h5>
    </div>
  );
};

export default OrderItemCard;
