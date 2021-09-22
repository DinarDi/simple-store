import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAPI } from "../api/api";
import Button from "../components/Button/Button";
import OrderCard from "../components/OrderCard/OrderCard";
import { IOrders } from "../types";

const Orders: React.FC = () => {
  const [orders, setOrders] = useState<IOrders[]>([]);

  useEffect(() => {
    async function fetchOrders() {
      const ordersResponse = await fetchAPI.getOrders();
      setOrders(ordersResponse.data);
    }
    fetchOrders();
  }, []);
  return (
    <div className="content p-40">
      <h1 className="mb-30">Мои заказы</h1>
      <div className="d-flex flex-wrap">
        {orders.length ? (
          orders.map((order) => <OrderCard key={order.id} order={order} />)
        ) : (
          <div className="noItems d-flex flex-column align-center">
            <h3 className="mb-10">Заказов нет</h3>
            <p>Вы ничего не заказывали</p>
            <Link to="/">
              <Button>Вернуться назад</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
