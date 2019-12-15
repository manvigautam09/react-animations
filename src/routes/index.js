import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./Products";
import history from "../services/index";
import ProductDetail from "./ProductDetail";

export default function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/products" exact history={history}>
          <Products />
        </Route>
        <Route path="/products/:id" exact>
          <ProductDetail />
        </Route>
      </Switch>
    </Router>
  );
}
