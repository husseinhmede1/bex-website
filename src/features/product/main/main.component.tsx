import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "&store/store";

import "./main.css";

import { ChallangesComponent } from "../challanges/challanges.component";
import { MenuComponent } from "../menu/menu.component";
import { HandlesComponent } from "../handles/handles.component";
import { SaveComponent } from "../save/save.component";
import { PackagesComponent } from "../packages/packages.component";
import { TryforFreeComponent } from "../tryforFree/tryforFree.component";
import { BenefitsComponent } from "../benefits/benefits.component";
import { InfoComponent } from "../info/info.component";
import { ConnectComponent } from "../connect/connect.component";

/**
 *
 *
 * These are actions imported from the feature slices.
 * You can use 'useDispatch' hook or 'mapDispatchToProps'
 * to dispatch these actions
 */
import { loginActions } from "&features/demo/login/login.slice";

const { innerWidth: width, innerHeight: height } = window;

type ReduxProps = ConnectedProps<typeof connector>;

const MainComponent = (props: ReduxProps) => {
  const { logout } = props;
  const { t } = useTranslation(["Main"]);

  /**
   * useEffect performs side-effects on component rendering.
   * It takes a function f  or side-effects and a dependency list.
   * When dependency list is empty, useEffect runs each time the component rerenders
   * Adding variables to the dependency list will cause useEffect to run each time a variable changes
   */
  useEffect(() => {
    // Write your side-effects here
  }, []);

  return (
    <div className="MainComponent">
      <div>
        <MenuComponent />
      </div>
      <div className="backGround">
        <div className="challangesSize">
          <ChallangesComponent />
        </div>
      </div>
      <div id={"section1"} className="divChallange">
        <HandlesComponent />
      </div>
      <div>
        <SaveComponent />
      </div>
      <PackagesComponent />
      <TryforFreeComponent />
      <BenefitsComponent />

      <InfoComponent />
      <ConnectComponent />
    </div>
  );
};

/**
 * Maps state variables from redux store to props of currect component
 * @param state
 */
const mapStateToProps = (state: RootState) => ({
  // Map your redux state to your props here
});

/**
 * Maps actions from slices to props
 */
const mapDispatchToProps = {
  // map your actions here ex:
  // increment : counterActions.increment
  logout: loginActions.reset,
};

/**
 * Connects component to redux store
 */
const connector = connect(mapStateToProps, mapDispatchToProps);
const MainComponentRedux = connector(MainComponent);

export { MainComponentRedux as MainComponent };
