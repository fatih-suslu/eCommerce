import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ShopPage from "./ShopPage";

export default function () {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/shop">
        <ShopPage />
      </Route>
    </Switch>
  );
}
