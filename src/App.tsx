import React from "react";
import { Router, Route, Switch } from "react-router";
import { History } from "history";

import "./App.css";
import { Counter } from "&features/counter/counter.component";
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
        <Route exact path="/" render={() => <div>Main</div>} />
        <PrivateRoute exact path="/counter" component={Counter} />
      </Switch>
    </Router>
  );
};

export default App;
