import React, { useContext, useState } from "react";

import logo from "../../img/logo.svg";
import favorites from "../../img/favorites.svg";
import orders from "../../img/orders.svg";
import cart from "../../img/cart.svg";
import Cart from "../Cart/Cart";
import { Context } from "../../context/context";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const { cartItems } = useContext(Context);

  const total = cartItems.reduce((sum, item) => item.price + sum, 0);

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src={logo} alt="Logo" />
          <div>
            <h3 className="text-uppercase">REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>

      <ul className="d-flex align-center">
        <li className="mr-30 cu-p" onClick={() => setCartOpen(!cartOpen)}>
          <img width={18} height={18} src={cart} alt="Cart" />
          <span>{total} руб.</span>
        </li>
        <Cart setOpen={() => setCartOpen(!cartOpen)} opened={cartOpen} />
        <li className="mr-30">
          <Link to="/favorites">
            <img width={21} height={18} src={favorites} alt="Favorites" />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img width={20} height={20} src={orders} alt="Orders" />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
