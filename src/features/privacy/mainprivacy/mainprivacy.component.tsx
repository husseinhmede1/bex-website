import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "&store/store";

import "./mainprivacy.css";

import { PolicyComponent } from "&features/privacy/policy/policy.component";
import { TermsComponent } from "&features/privacy/terms/terms.component";

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

const MainprivacyComponent = (props: ReduxProps) => {
  const { logout } = props;
  const { t } = useTranslation(["Mainprivacy"]);

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
    <div>
      <PolicyComponent /> 
      <TermsComponent />
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
const MainprivacyComponentRedux = connector(MainprivacyComponent);

export { MainprivacyComponentRedux as MainprivacyComponent };
