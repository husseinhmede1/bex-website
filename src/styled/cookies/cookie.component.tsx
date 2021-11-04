import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "&store/store";

import "./cookie.css";

import accept from "&assets/img/Accept.png";
import accept2 from "&assets/img/Accept@2x.png";
import accept3 from "&assets/img/Accept@3x.png";

import dont from "&assets/img/Do-not-accept.png";
import dont2 from "&assets/img/Do-not-accept@2x.png";
import dont3 from "&assets/img/Do-not-accept@3x.png";

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

const CookieComponent = (props: ReduxProps) => {
  const { logout } = props;
  const { t } = useTranslation(["Cookie"]);

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
      <div className="cookieBackground">
        <div className="div1Cookie">
          <span className="Cookie-Policy">COOKIE</span>

          <span className="This-site-uses-cookies-small-text-files-that-are-placed-on-your-machine-to-help-the-site-provide-a-better-user-experience-In-general-cookies-are-used-to-retain-user-preferences-store-information-for-things-like-shopping-carts-and-provide-anonymized-t">
            This site uses cookies – small text files that are placed on your
            machine to help the site provide a better user experience. In
            general, cookies are used to retain user preferences, store
            information for things like shopping carts, and provide anonymized
            tracking data to third party applications like Google Analytics. As
            a rule, cookies will make your browsing experience better. However,
            you may prefer to disable cookies on this site and on others. The
            most effective way to do this is to disable cookies in your browser.
            We suggest consulting the Help section of your browser or taking a
            look at the About Cookies website which offers guidance for all
            modern browsers
          </span>
        </div>

        <div className='cookieButtons'>
          <img
            src={dont}
            srcSet={`${dont2} 2x, ${dont3} 3x`}
            className="Do-not-accept"
          ></img>  

          <img
            src={accept}
            srcSet={`${accept2} 2x, ${accept3} 3x`}
            className="Accept"
          ></img>
        </div>
      </div>
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
const CookieComponentRedux = connector(CookieComponent);

export { CookieComponentRedux as CookieComponent };
