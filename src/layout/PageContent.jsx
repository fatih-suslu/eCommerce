import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import ContactPage from "../pages/ContactPage";
import TeamPage from "../pages/TeamPage";
import AboutPage from "../pages/AboutPage";
import SingUpPage from "../pages/SignUpPage";

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
      <Route path="/team">
        <TeamPage />
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route path="/signup">
        <SingUpPage />
      </Route>
    </Switch>
  );
}
