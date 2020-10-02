import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Button } from "antd";
import { useTranslation } from "react-i18next";

import { RootState } from "&store/store";
/**
 * These are actions imported from the feature slices.
 * You can use 'useDispatch' hook or 'mapDispatchToProps'
 * to dispatch these actions
 */
import { homeActions } from "./home.slice";
import { loginActions } from "&features/demo/login/login.slice";

type ReduxProps = ConnectedProps<typeof connector>;

const HomeComponent = (props: ReduxProps) => {
  const { logout } = props;
  const { t } = useTranslation(["home"]);

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
    <>
      <h1>{t("PROTECTED_HOME_PAGE")}</h1>
      <a href="#/">{t("GO_LANDING")}</a>
      <Button danger type="text" onClick={logout}>
        {t("LOGOUT")}
      </Button>
    </>
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
const HomeComponentRedux = connector(HomeComponent);

export { HomeComponentRedux as HomeComponent };
