import React from "react";
import Card from "../components/Card";

import searchIcon from "../img/searchIcon.svg";

const Home: React.FC = () => {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between">
        <h1 className="mb-30">Все кроссовки</h1>
        <div className="search-block d-flex p-5">
          <img src={searchIcon} alt="SearchIcon" />
          <input type="text" placeholder="Поиск ..." />
        </div>
      </div>

      <div className="d-flex flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
