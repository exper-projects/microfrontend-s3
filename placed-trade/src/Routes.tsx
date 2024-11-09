import { FC } from "react";

import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom";

import { AppRoutes } from "./common/constants";
import { CommonMfeProps } from "./hooks/mfeLoader";
import { Order } from "./pages/Order";

export const Routes: FC<CommonMfeProps> = ({ basePath }) => {
  return (
    <BrowserRouter basename={basePath}>
      <Switch>
        <Route path={AppRoutes.ORDER}>
          <Order />
        </Route>
        <Route path="*">
          <Redirect to={AppRoutes.ORDER} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
