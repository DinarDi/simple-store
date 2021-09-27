import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import { Context } from "../context/context";

const Favorites: React.FC = () => {
  const {
    favoriteItems,
    addToCartBtn,
    itemAddedToCart,
    addToFavorite,
    itemAddedToFavorite,
    isLoading,
  } = useContext(Context);
  return (
    <div className="content p-40">
      <h1 className="mb-30">Избранные</h1>
      <div className="d-flex flex-wrap">
        {favoriteItems.length ? (
          favoriteItems.map((item) => (
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              imgUrl={item.imgUrl}
              addToCart={addToCartBtn}
              itemAddedToCart={itemAddedToCart}
              addToFavorite={addToFavorite}
              itemAddedToFavorite={itemAddedToFavorite}
            />
          ))
        ) : (
          <div className="noItems d-flex flex-column align-center">
            <h3 className="mb-10">Избранных нет</h3>
            <p>Вы ничего не добавляли в избранное</p>
            <Link to="/">
              <Button>Вернуться назад</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
