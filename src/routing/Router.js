import React from "react";
import { routes } from "../routes";
import Home from "../views/Home/Home";
import Products from "../views/Products/Products";
import Navbar from "../components/navigations/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.products} component={Products} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
