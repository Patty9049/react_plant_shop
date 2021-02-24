import React from "react";
import { routes } from "../routes";
import Home from "../views/Home/Home";
import Products from "../views/Products/Products";
import Navbar from "../components/navigations/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "../components/Cart/Cart";
import Logo from "../components/Logo/Logo";
import About from "../views/About/About";
import Contact from "../views/Contact/Contact";
import SingleProduct from "../views/SingleProduct/SingleProduct";

const Router = () => {
  return (
    <BrowserRouter>
      <Logo/>
      <Navbar />
      <Cart/>
      <Switch>
        <Route exact path={routes.home} component={Home} />
        <Route path={routes.products} component={Products} />
        <Route path={routes.about} component={About} />
        <Route path={routes.contact} component={Contact} />
        <Route path={routes.product} component={SingleProduct} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
