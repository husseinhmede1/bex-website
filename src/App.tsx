import React from "react";
import { Router, Route, Switch, Redirect } from "react-router";
import { History } from "history";

import "./App.css";
import { PrivateRoute } from "&route/protectedRoute";

type AppProps = {
  /** Browser history for routing */
  history: History<any>;
};

const App = ({ history }: AppProps) => {
  return (
    // Router connected to redux, here redux is used for navigation integrity
    <Router history={history}>
      {/* App main routing switch */}
      <Switch>
        <Route
          exact
          path="/"
          render={() => <div>This path is not protected</div>}
        />
        <PrivateRoute
          exact
          path="/dashboard"
          component={() => <div>This path is protected</div>}
        />
        <Route path="/404" render={() => <div>page not found</div>} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};

export default App;
