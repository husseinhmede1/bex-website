import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "&store/store";

import "./packages.css";

import down from "&assets/img/down-arrow.png";
import down2 from "&assets/img/down-arrow@2x.png";
import down3 from "&assets/img/down-arrow@3x.png";

/**
 *
 *
 * These are actions imported from the feature slices.
 * You can use 'useDispatch' hook or 'mapDispatchToProps'
 * to dispatch these actions
 */
//import { homeActions } from "./home.slice";
import { loginActions } from "&features/demo/login/login.slice";

const { innerWidth: width, innerHeight: height } = window;

type ReduxProps = ConnectedProps<typeof connector>;

const PackagesComponent = (props: ReduxProps) => {
  const { logout } = props;
  const { t } = useTranslation(["Packages"]);

  /**
   * useEffect performs side-effects on component rendering.
   * It takes a function for side-effects and a dependency list.
   * When dependency list is empty, useEffect runs each time the component rerenders
   * Adding variables to the dependency list will cause useEffect to run each time a variable changes
   */
  useEffect(() => {
    // Write your side-effects here
  }, []);

  return (
    <div className="Product-page-Control" style={{ height: height }}>
      <div className="div1">
        <span className="OUR-Packages">OUR PACKAGES</span>

        <span className="Choose-the-features-and-functionalities-your-teams-need-today-Easily-upgrade-as-your-company-grows">
          <div>
            {" "}
            Choose the features and functionalities your teams need today.
          </div>
          <div>Easily upgrade as your company grows.</div>
        </span>
      </div>

      <div className="div2">
        <div className="Rectangle-57"></div>
        <div className="Rectangle-24086"></div>
        <div className="Path-161569"></div>
      </div>
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
const PackagesComponentRedux = connector(PackagesComponent);

export { PackagesComponentRedux as PackagesComponent };
