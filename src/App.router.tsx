import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { connect, ConnectedProps } from "react-redux";

import { history, RootState } from "&store/store";
import { ProtectedRoute } from "&route/protectedRoute";
// TODO remove demo routes
import { HomeComponent } from "&features/demo/home/home.component";
import { ChallangesComponent } from "&features/product/challanges/challanges.component";
import { LoginComponent } from "&features/demo/login/login.component";
import { MenuComponent } from "&features/product/menu/menu.component";
import { HandlesComponent } from "&features/product/handles/handles.component";
import { SaveComponent } from "&features/product/save/save.component";
import { PackagesComponent } from "&features/product/packages/packages.component";
import { TryforFreeComponent } from "&features/product/tryforFree/tryforFree.component";
import { BenefitsComponent } from "&features/product/benefits/benefits.component";
import { InfoComponent } from "&features/product/info/info.component";
import { ConnectComponent } from "&features/product/connect/connect.component";
import { MainComponent } from "&features/product/main/main.component";

type ReduxProps = ConnectedProps<typeof connector>;

const AppRouter = (props: ReduxProps) => {
  const { isAuthenticated } = props;

  return (
    <Router history={history}>
      {/* App main routing switch */}
      <Switch>
        {/* TODO remove the coming demo routes and add your's */}
        <Route exact path="/" component={MainComponent} />
        <Route exact path="/login" component={LoginComponent} />
        <Route exact path="/menu" component={MenuComponent} />
        <Route exact path="/handles" component={HandlesComponent} />
        <Route exact path="/challanges" component={ChallangesComponent} />
        <Route exact path="/save" component={SaveComponent} />
        <Route exact path="/packages" component={PackagesComponent} />
        <Route exact path="/tryforFree" component={TryforFreeComponent} />
        <Route exact path="/benefits" component={BenefitsComponent} />
        <Route exact path="/info" component={InfoComponent} />
        <Route exact path="/connect" component={ConnectComponent} />
        <Route exact path="/main" component={MainComponent} />

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
