import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "&store/store";
import { Router, Route, Link } from "react-router-dom";

import "./policy.css";

import areeba from "&assets/img/Areeba-logo.png";
import areeba2 from "&assets/img/Areeba-logo@2x.png";
import areeba3 from "&assets/img/Areeba-logo@3x.png";

import mastercard from "&assets/img/Mastercard.png";
import mastercard2 from "&assets/img/Mastercard@2x.png";
import mastercard3 from "&assets/img/Mastercard@3x.png";

import chatbot from "&assets/img/chatbot.png";
import chatbot2 from "&assets/img/chatbot@2x.png";
import chatbot3 from "&assets/img/chatbot@3x.png";

import menu from "&assets/img/Burger-menu.png";
import menu2 from "&assets/img/Burger-menu@2x.png";
import menu3 from "&assets/img/Burger-menu@3x.png";
/*
 * These are actions imported from the feature slices.
 * You can use 'useDispatch' hook or 'mapDispatchToProps'
 * to dispatch these actions
 */
//import { homeActions } from "./home.slice";
import { loginActions } from "&features/demo/login/login.slice";

const { innerWidth: width, innerHeight: height } = window;

type ReduxProps = ConnectedProps<typeof connector>;

const PolicyComponent = (props: ReduxProps) => {
  const { logout } = props;
  const { t } = useTranslation(["Policy"]);

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
    <div className="MainFlexPolicy">
      <div className="navigationBarPolicy">
        <Link to="/main" className="BEXP">
          BEX
        </Link>

        <div className="navbarLinksPolicy">
          <span className="How-bex-worksP">How bex works</span>

          <span className="PricingP">Pricing</span>

          <span className="About-usP">About us</span>

          <span className="Contact-usP">Contact us</span>
        </div>

        <div className="policyMobileMenuNavbar">
          <Link to="/menumobile">
            <img
              src={menu}
              srcSet={`${menu2} 2x, ${menu3} 3x`}
              className="MenuPolicy"
            />
          </Link>
        </div>
      </div>
      <div className="PrivacyPolicyToLeft">
        <div className="PrivacyPolicyTitlePosition">
          <span className="Privacy-policyP">Privacy policy</span>
        </div>
        <div className="PrivacyPolicyRules">
          <div className="spaceBetween">
            <span className="span1P">1.</span>

            <span className="Acceptance-of-termsP">
              <Link
                onClick={() => window.location.replace("/#section1")}
                to="/mainprivacy"
              >
                Acceptance of terms
              </Link>
            </span>
          </div>
          <div className="spaceBetween">
            <span className="span1P">2.</span>

            <span className="Privacy-complaintsP">
              <Link
                onClick={() => window.location.replace("/#section2")}
                to="/mainprivacy"
              >
                Privacy complaints
              </Link>{" "}
            </span>
          </div>
          <div className="spaceBetween">
            <span className="span1P">3.</span>

            <span className="Data-retention-and-data-probabilityP">
              <Link
                onClick={() => window.location.replace("/#section3")}
                to="/mainprivacy"
              >
                Data retention and data probability
              </Link>
            </span>
          </div>
          <div className="spaceBetween">
            <span className="span1P">4.</span>

            <span className="How-your-personal-information-is-usedP">
              <Link
                onClick={() => window.location.replace("/#section4")}
                to="/mainprivacy"
              >
                How your personal information is used
              </Link>
            </span>
          </div>
          <div className="spaceBetween">
            <span className="span1P">5.</span>

            <span className="Links-to-third-party-siteP">
              <Link
                onClick={() => window.location.replace("/#section5")}
                to="/mainprivacy"
              >
                Links to third party site
              </Link>
            </span>
          </div>
          <div className="spaceBetween">
            <span className="span1P">6.</span>

            <span className="Non-discriminationP">
              <Link
                onClick={() => window.location.replace("/#section6")}
                to="/mainprivacy"
              >
                Non discrimination
              </Link>
            </span>
          </div>
          <div className="spaceBetween">
            <span className="span1P">7.</span>

            <span className="Legal-bases-for-professionP">
              <Link
                onClick={() => window.location.replace("/#section7")}
                to="/mainprivacy"
              >
                Legal bases for profession
              </Link>
            </span>
          </div>
          <div className="spaceBetween">
            <span className="span1P">8.</span>

            <span className="Cookie-and-tracking-technologiesP">
              <Link
                onClick={() => window.location.replace("/#section8 ")}
                to="/mainprivacy"
              >
                Cookie and tracking technologies
              </Link>
            </span>
          </div>
          <div className="spaceBetween">
            <span className="span1P">9.</span>

            <span className="Information-sharing-with-service-providerP">
              Information sharing with service provider
            </span>
          </div>
          <div className="spaceBetween">
            <span className="span1P">10.</span>

            <span className="Changes-in-privacy-policyP">
              Changes in privacy policy
            </span>
          </div>
        </div>
      </div>

      <div className="greencercle">
        <img
          src={chatbot}
          srcSet={`${chatbot2} 2x, ${chatbot3} 3x`}
          className="chatbotP"
        />
      </div>

      <div className="areeba-masterP">
        <div className="areebaP">
          <span className="Powered-byP">Powered by</span>
          <img
            src={areeba}
            srcSet={`${areeba2} 2x, ${areeba3} 3x`}
            className="Areeba-logoP"
          ></img>
        </div>
        <span className="areebaMasterLinePolicy"></span>
        <div className="areebaP">
          <span className="In-partnership-withP">In partnership with</span>
          <img
            src={mastercard}
            srcSet={`${mastercard2} 2x, ${mastercard3} 3x`}
            className="MastercardP"
          ></img>
        </div>
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
const PolicyComponentRedux = connector(PolicyComponent);

export { PolicyComponentRedux as PolicyComponent };
