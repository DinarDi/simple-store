import React from "react";

import { IOrders } from "../../types";
import styles from "./OrderCard.module.scss";
import OrderItemCard from "./OrderItemCard";

interface IOrderCard {
  order: IOrders;
}

const OrderCard: React.FC<IOrderCard> = ({ order }) => {
  return (
    <div className={`${styles.card} p-40 mr-40 mb-40`}>
      <h5 className="mb-20">Заказ №{order.id}</h5>
      <div className="d-flex flex-wrap">
        {order.items.map((item) => (
          <OrderItemCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default OrderCard;
