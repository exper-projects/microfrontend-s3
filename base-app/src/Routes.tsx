import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

import { BaseRoute } from "./common/constants";
import Dashboard from "./pages/Dashboard";
import { CryptoInfo } from "./pages/Dashboard/CryptoInfo";
import { PlacedTrade } from "./pages/Dashboard/PlacedTrade";
import { Transactions } from "./pages/Dashboard/Transactions";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Dashboard />
          <Route path={BaseRoute.CryptoInfo}>
            <CryptoInfo />
          </Route>
          <Route path={BaseRoute.Transactions}>
            <Transactions />
          </Route>
          <Route path={BaseRoute.PlacedTrade}>
            <PlacedTrade />
          </Route>
          <Route path="*">
            <Redirect to={BaseRoute.CryptoInfo} />
          </Route>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
