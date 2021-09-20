import axios from "axios";
import React, { useEffect, useState } from "react";
import OrderCard from "../components/OrderCard/OrderCard";
import { IOrders } from "../types";

const Orders = () => {
  const [orders, setOrders] = useState<IOrders[]>([]);
  useEffect(() => {
    async function fetchOrders() {
      const ordersResponse = await axios.get<IOrders[]>(
        "http://localhost:3000/orders"
      );
      setOrders(ordersResponse.data);
    }
    fetchOrders();
  }, []);
  return (
    <div className="content p-40">
      <h1 className="mb-30">Мои заказы</h1>
      <div className="d-flex flex-wrap">
        {orders.map((order) => (
          <OrderCard order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;
