import { FC } from "react";

import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom";

import { AppRoutes } from "./common/constants";
import { CommonMfeProps } from "./hooks/mfeLoader";
import { Overview } from "./pages/Overview";

export const Routes: FC<CommonMfeProps> = ({ basePath }) => {
  return (
    <BrowserRouter basename={basePath}>
      <Switch>
        <Route path={AppRoutes.OVERVIEW}>
          <Overview />
        </Route>
        <Route path="*">
          <Redirect to={AppRoutes.OVERVIEW} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
