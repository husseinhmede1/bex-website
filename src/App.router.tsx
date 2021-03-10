import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";

import { history, RootState } from "&store/store";
import { ProtectedRoute } from "&route/protectedRoute";
// TODO remove demo routes
import { HomeComponent } from "&features/demo/home/home.component";
import { LandingComponent } from "&features/demo/landing/landing.component";
import { LoginComponent } from "&features/demo/login/login.component";

type ReduxProps = ConnectedProps<typeof connector>;

const AppRouter = (props: ReduxProps) => {
  const { isAuthenticated } = props;

  return (
    <Router history={history}>
      {/* App main routing switch */}
      <Switch>
        {/* TODO remove the coming demo routes and add your's */}
        <Route exact path="/" component={LandingComponent} />
        <Route exact path="/login" component={LoginComponent} />
        <ProtectedRoute
          exact
          path="/home"
          component={HomeComponent}
          validator={isAuthenticated}
          fallBack="/login"
        />

        {/* TODO This block handles unmatched routes. Add your custom 404 component */}
        <Route path="/404" render={() => <div>page not found</div>} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};

/**
 * Maps state variables from redux store to props of currect component
 * @param state
 */
const mapStateToProps = (state: RootState) => ({
  isAuthenticated: state.login.isLoggedIn,
});

/**
 * Maps actions from slices to props
 */
const mapDispatchToProps = {};

/**
 * Connects component to redux store
 */
const connector = connect(mapStateToProps, mapDispatchToProps);
const AppRouteRedux = connector(AppRouter);

export { AppRouteRedux as AppRouter };
