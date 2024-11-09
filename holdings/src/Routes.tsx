import { FC } from "react";

import { Route, Redirect, BrowserRouter, Switch } from "react-router-dom";

import { Tab } from "./common/constants";
import { CommonMfeProps } from "./hooks/mfeLoader";
import { HoldingsList } from "./pages/HoldingsList";

export const Routes: FC<CommonMfeProps> = ({ basePath, baseHistory }) => {
  return (
    <BrowserRouter basename={basePath}>
      <Switch>
        <Route path={Tab.OVERVIEW}>
          <HoldingsList baseHistory={baseHistory} />
        </Route>
        <Route path="/">
          <Redirect to={Tab.OVERVIEW} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
