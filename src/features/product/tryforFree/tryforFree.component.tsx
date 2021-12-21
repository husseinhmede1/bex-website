import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "&store/store";

import "./tryforFree.css";

import try1 from "&assets/img/Try-BEX-img.png";
import try2 from "&assets/img/Try-BEX-img@2x.png";
import try3 from "&assets/img/Try-BEX-img@3x.png";

import try11 from "&assets/img/Try-BEX-Mobile.png";
import try12 from "&assets/img/Try-BEX-Mobile@2x.png";
import try13 from "&assets/img/Try-BEX-Mobile@3x.png";

import apple from "&assets/img/Apple-Icon.png";
import apple2 from "&assets/img/Apple-Icon@2x.png";
import apple3 from "&assets/img/Apple-Icon@3x.png";

import play from "&assets/img/Google-play.png";
import play2 from "&assets/img/Google-play@2x.png";
import play3 from "&assets/img/Google-play@3x.png";

import demo from "&assets/img/Get-your-demo.png";
import demo2 from "&assets/img/Get-your-demo@2x.png";
import demo3 from "&assets/img/Get-your-demo@3x.png";

/**
 *
 *
 * These are actions imported from the feature slices.
 * You can use 'useDispatch' hook or 'mapDispatchToProps'
 * to dispatch these actions
 */
import { loginActions } from "&features/demo/login/login.slice";

type ReduxProps = ConnectedProps<typeof connector>;

const TryforFreeComponent = (props: ReduxProps) => {
  const { logout } = props;
  const { t } = useTranslation(["TryforFree"]);

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
    <div className="tryforfreeBackground" id={"tryforFreeId"}>
      <div className="tryforfreerightSide">
        <div className="tryforfreeTitle">
          <span className="Try-BEX-For-Free">Try BEX For Free</span>
          <span className="-month-3-users-Digital-card-only">
            1 Month | 3 Users | Digital Card Only
          </span>
        </div>
        <div className="tryforfreeButtons">
          <img
            src={demo}
            srcSet={`${demo2} 2x, ${demo3} 3x`}
            className="Get-your-demo"
          ></img>

          <div className="applePlayTryforFree">
            <img
              src={apple}
              srcSet={`${apple2} 2x, ${apple3} 3x`}
              className="Apple"
            ></img>

            <img
              src={play}
              srcSet={`${play2} 2x, ${play3} 3x`}
              className="Google-play"
            ></img>
          </div>
        </div>
      </div>
      <div className="tryforfreeImagLeftSide">
        <img
          src={try1}
          srcSet={`${try2} 2x, ${try3} 3x`}
          className="Try-BEX-img"
        ></img>

        <img
          src={try11}
          srcSet={`${try12} 2x, ${try13} 3x`}
          className="Try-BEX-Mobileimg"
        ></img>
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
const TryforFreeComponentRedux = connector(TryforFreeComponent);

export { TryforFreeComponentRedux as TryforFreeComponent };
