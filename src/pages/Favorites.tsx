import React, { useContext } from "react";
import Card from "../components/Card/Card";
import { Context } from "../context/context";

const Favorites: React.FC = () => {
  const {
    favoriteItems,
    addToCartBtn,
    itemAddedToCart,
    addToFavorite,
    itemAddedToFavorite,
  } = useContext(Context);
  return (
    <div className="content p-40">
      <h1 className="mb-30">Избранные</h1>
      <div className="d-flex flex-wrap">
        {favoriteItems.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
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

export default Favorites;
