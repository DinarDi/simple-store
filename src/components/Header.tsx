import React from "react";

import logo from "../img/logo.svg";
import favorites from "../img/favorites.svg";
import orders from "../img/orders.svg";
import cart from "../img/cart.svg";

const Header = () => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src={logo} alt="Logo" />
        <div>
          <h3 className="text-uppercase">REACT SNEAKERS</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>

      <ul className="d-flex align-center">
        <li className="mr-30">
          <img width={18} height={18} src={cart} alt="Cart" />
          <span>1205 руб.</span>
        </li>
        <li className="mr-30">
          <img width={21} height={18} src={favorites} alt="Favorites" />
        </li>
        <li>
          <img width={20} height={20} src={orders} alt="Orders" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
