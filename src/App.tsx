import React from "react";
import { Router, Route, Switch, Redirect } from "react-router";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "&store/store";
import { History } from "history";

import "./App.css";
import { PrivateRoute } from "&route/protectedRoute";

// TODO remove demo routes
import { HomeComponent } from "&features/demo/Home/Home.component";
import { LandingComponent } from "&features/demo/Landing/Landing.component";
import { LoginComponent } from "&features/demo/Login/Login.component";

type ReduxProps = ConnectedProps<typeof connector>;
type AppProps = {
  /** Browser history for routing */
  history: History<any>;
};

const App = (props: AppProps & ReduxProps) => {
  const { history, isAuthenticated } = props;

  return (
    /** Router connected to redux, here redux is used for navigation integrity */
    <Router history={history}>
      {/* App main routing switch */}
      <Switch>
        {/* TODO remove demo routes and add your's */}
        <Route exact path="/" component={LandingComponent} />
        <Route exact path="/login" component={LoginComponent} />
        <PrivateRoute
          exact
          path="/dashboard"
          component={HomeComponent}
          isAuthenticated={isAuthenticated}
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
  // TODO change this to your real auth validator
  isAuthenticated: false,
});

/**
 * Maps actions from slices to props
 */
const mapDispatchToProps = {};

/**
 * Connects component to redux store
 */
const connector = connect(mapStateToProps, mapDispatchToProps);
const AppRedux = connector(App);

export { AppRedux as App };
