import React, { useContext } from "react";
import Card from "../components/Card/Card";
import Loader from "../components/Loader/Loader";
import { Context } from "../context/context";

import searchIcon from "../img/searchIcon.svg";

const Home: React.FC = () => {
  const {
    allItems,
    searchValue,
    isLoading,
    setSearchValue,
    addToCartBtn,
    itemAddedToCart,
    addToFavorite,
    itemAddedToFavorite,
  } = useContext(Context);

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

      <div className="d-flex flex-wrap justify-around">
        {isLoading
          ? [...Array(12)].map((item) => <Loader />)
          : allItems
              .filter((item) =>
                item.title.toLowerCase().includes(searchValue.toLowerCase())
              )
              .map((item, index) => (
                <Card
                  key={index}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  imgUrl={item.imgUrl}
                  addToCart={addToCartBtn}
                  itemAddedToCart={itemAddedToCart}
                  addToFavorite={addToFavorite}
                  itemAddedToFavorite={itemAddedToFavorite}
                />
              ))}
      </div>
    </div>
  );
};

export default Home;
