import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ShopPage from "./ShopPage";
import ProductDetailPage from "./ProductDetailPage";
import ContactPage from "./ContactPage";

export default function () {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/shop">
        <ShopPage />
      </Route>
      <Route path="/product">
        <ProductDetailPage />
      </Route>
      <Route path="/contact">
        <ContactPage />
      </Route>
    </Switch>
  );
}
