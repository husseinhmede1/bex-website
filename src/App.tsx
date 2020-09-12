import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { History } from "history";

import { Counter } from "&features/counter/counter.component";
import { PrivateRoute } from "&route/protectedRoute";
import "./App.css";

type AppProps = {
  /** Browser history for routing */
  history: History<any>;
};

const App = ({ history }: AppProps) => {
  return (
    // Router connected to redux, here redux is used for navigation integrity
    <ConnectedRouter history={history}>
      <BrowserRouter>
        {/* App main routing switch */}
        <Switch>
          <Route exact path="/login" render={() => <div>Login </div>} />
          <Route exact path="/" render={() => <div>Main</div>} />
          <PrivateRoute exact path="/counter" component={Counter} />
        </Switch>
      </BrowserRouter>
    </ConnectedRouter>
  );
};

export default App;
