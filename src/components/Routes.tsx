import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Favorites from "../pages/Favorites";
import Home from "../pages/Home";
import Orders from "../pages/Orders";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/orders" component={Orders} />
      <Route exact path="/favorites" component={Favorites} />
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
