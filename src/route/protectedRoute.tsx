import React from "react";

import { Route, Redirect, RouteProps } from "react-router-dom";

type PrivateRouteProps = {
  /** Component to route to when  */
  component: React.ComponentType<any>;
};

/**
 * Private route used for all routes that require authentication.
 * If user is authenticated, the component passed to the route is rendered,
 * otherwise user is redirected to login page.
 * @param param0 component to render and rest props
 */
const PrivateRoute = ({
  component: Component,
  ...rest
}: PrivateRouteProps & RouteProps) => (
  <Route
    {...rest}
    render={(props) =>
      // TODO change this to token from store
      true ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

export { PrivateRoute };
