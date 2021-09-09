import React, { useContext, useState } from "react";
import Card from "../components/Card";
import { Context } from "../context";

import searchIcon from "../img/searchIcon.svg";

const Home: React.FC = () => {
  const { allItems, searchValue, setSearchValue, addToCartBtn } =
    useContext(Context);
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between">
        <h1 className="mb-30">
          {searchValue ? `Поиск по запросу: ${searchValue}` : `Все кроссовки`}
        </h1>
        <div className="search-block d-flex p-5">
          <img src={searchIcon} alt="SearchIcon" />
          <input
            type="text"
            placeholder="Поиск ..."
            value={searchValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchValue(e.target.value)
            }
          />
        </div>
      </div>

      <div className="d-flex flex-wrap">
        {allItems
          .filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              plus={item.plus}
              addToCart={addToCartBtn}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
