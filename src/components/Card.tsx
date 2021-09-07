import React from "react";

import img1 from "../img/img1.png";
import plusOff from "../img/plusOff.svg";

const Card = () => {
  return (
    <div className="card p-40 mr-40 mb-40">
      <img
        width={112}
        height={112}
        src={img1}
        alt="Sneakers"
        className="mb-15"
      />
      <h5 className="mb-15">Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between">
        <div>
          <p>Цена:</p>
          <b>12 999 руб.</b>
        </div>
        <img width={32} height={32} src={plusOff} alt="plusOff" />
      </div>
    </div>
  );
};

export default Card;
