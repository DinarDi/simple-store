import React from "react";

import Routes from "./components/Routes";
import Header from "./components/Header";
import Cart from "./components/Cart";

const App = () => {
  return (
    <div className="wrapper clear">
      <Header />
      <Routes />
      {/* <Cart /> */}
    </div>
  );
};

export default App;
