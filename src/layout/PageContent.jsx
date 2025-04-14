import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";

export default function () {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
    </Switch>
  );
}
