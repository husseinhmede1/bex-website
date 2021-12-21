import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "&store/store";
import { Link } from "react-router-dom";

import "./menumobile.css";

import close from "&assets/img/close.png";
import close1 from "&assets/img/close@2x.png";
import close2 from "&assets/img/close@3x.png";

/**
 *
 *
 * These are actions imported from the feature slices.
 * You can use 'useDispatch' hook or 'mapDispatchToProps'
 * to dispatch these actions
 */
//import { homeActions } from "./home.slice";
import { loginActions } from "&features/demo/login/login.slice";

type ReduxProps = ConnectedProps<typeof connector>;

const MenumobileComponent = (props: ReduxProps) => {
  const { logout } = props;
  const { t } = useTranslation(["Menumobile"]);

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
      <div className="menuMobileBackground">
        <Link to="/main" className="closeMarginMenuMobile">
          <img
            src={close}
            srcSet={`${close1} 2x, ${close2} 3x`}
            className="closeMenuMobile"
          />
        </Link>
        <div className="menuMobileTitleBex">
          <span className="BEXMenuMobile">BEX</span>
        </div>
        <div className="linesMarginMenuMobile">
          <div className="LineoneMenuMobile"></div>
          <span className="How-bex-worksMenuMobile">How bex works</span>
          <div className="LineTwoMenuMobile"></div>
          <span className="About-usMenuMobile">About us</span>

          <div className="LinethreeMenuMobile"></div>
          <span className="PricingMenuMobile">Pricing</span>

          <div className="LinefourMenuMobile"></div>
          <span className="Contact-usMenuMobile">Contact us</span>

          <div className="LinefiveMenuMobile"></div>
        </div>
      </div>
    </>
  );
};

/**
 * Maps state variables  from redux store to props of currect component
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
const MenumobileComponentRedux = connector(MenumobileComponent);

export { MenumobileComponentRedux as MenumobileComponent };
