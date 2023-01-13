import * as React from "react";
import { Route, RouteProps } from "react-router-dom";

export const PublicRoute = (routeProps: RouteProps) => {
  return <Route {...routeProps} />;
};
