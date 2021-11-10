import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "&store/store";
import { Router, Route, Link } from "react-router-dom";

import "./menu.css";

import Apple from "&assets/img/Apple-Icon.png";
import Apple2 from "&assets/img/Apple-Icon@2x.png"; 
import Apple3 from "&assets/img/Apple-Icon@3x.png";

import Gplay from "&assets/img/Google-play.png";
import Gplay2 from "&assets/img/Google-play@2x.png";
import Gplay3 from "&assets/img/Google-play@3x.png";

import tryForFree from "&assets/img/Try-for-free.png";
import tryForFree2 from "&assets/img/Try-for-free@2x.png";
import tryForFree3 from "&assets/img/Try-for-free@3x.png";

import getDemo from "&assets/img/Get-demo.png";
import getDemo2 from "&assets/img/Get-demo@2x.png";
import getDemo3 from "&assets/img/Get-demo@3x.png";

import areeba from "&assets/img/Areeba-logo.png";
import areeba2 from "&assets/img/Areeba-logo@2x.png";
import areeba3 from "&assets/img/Areeba-logo@3x.png";

import mastercard from "&assets/img/Mastercard.png";
import mastercard2 from "&assets/img/Mastercard@2x.png";
import mastercard3 from "&assets/img/Mastercard@3x.png";

import chatbot from "&assets/img/chatbot.png";
import chatbot2 from "&assets/img/chatbot@2x.png";
import chatbot3 from "&assets/img/chatbot@3x.png";

import menu from "&assets/img/Menu.png";
import menu2 from "&assets/img/Menu@2x.png";
import menu3 from "&assets/img/Menu@3x.png";
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

const MenuComponent = (props: ReduxProps) => {
  const { logout } = props;
  const { t } = useTranslation(["Menu"]);

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
    <div className="menuBackground"> 
      <div className="navbarMenu">
        <Link to="/mainprivacy" className="bexMenu"> 
          BEX
        </Link>  

        <div className="navbar-namesMenu">
          <span className="navbar-names-font1Menu">HOW BEX WORKS</span>
          <span className="navbar-names-fontMenu">PIRCING</span>
          <span className="navbar-names-fontMenu">ABOUT US</span>
          <span className="navbar-names-fontMenu">CONTACT US</span>
        </div>

        <div className="navbar-imagesMenu">
          <img
            src={Apple}
            srcSet={`${Apple2} 2x, ${Apple3} 3x`}
            className="appleImg"
          />

          <img
            src={Gplay}
            srcSet={`${Gplay2} 2x, ${Gplay3} 3x`}
            className="GplayImg"
          />
        </div>  
      </div>
      <div className="menuImgPosition">
        <Link to="/menumobile">
          <img
            src={menu}
            srcSet={`${menu2} 2x, ${menu3} 3x`}
            className="Menu"
          />
        </Link>
      </div>
      <div className="Busines-cntrlMenu">
        <div>
          <span className="Business-expense-management-made-easyMenu">
            <div> BUSINESS EXPENSE </div>
            <div>MANAGMENT </div>
            <div>Made Easy.</div>
          </span>
        </div>
        <div className="contrlMenu">
          <span className="Control-Spend-SaveMenu">CONTROL. SPEND. SAVE.</span>
        </div>
      </div>
      <div className="tryDemoMenu">
        <img
          src={tryForFree}
          srcSet={`${tryForFree2} 2x, ${tryForFree3} 3x`}
          className="Try-for-freeMenu"
        ></img>
        <img
          src={getDemo}
          srcSet={`${getDemo2} 2x, ${getDemo3} 3x`}
          className="Get-demoMenu"
        ></img>
      </div>
      <div className="GreenCercleMenu">
        <img
          src={chatbot}
          srcSet={`${chatbot2} 2x, ${chatbot3} 3x`}
          className="chatbotMenu"
        />
      </div>
      <div className="areeba-masterMenu">
        <div className="areebaMenu1">
          <span className="Powered-byMenu">Powered by</span>
          <img
            src={areeba}
            srcSet={`${areeba2} 2x, ${areeba3} 3x`}
            className="Areeba-logoMenu"
          ></img>
        </div>
        <span className="lineMenu"></span>
        <div className="mastercardMenu2">
          <span className="In-partnership-withMenu">In partnership with</span>
          <img
            src={mastercard}
            srcSet={`${mastercard2} 2x, ${mastercard3} 3x`}
            className="MastercardMenu"
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
const MenuComponentRedux = connector(MenuComponent);

export { MenuComponentRedux as MenuComponent };
