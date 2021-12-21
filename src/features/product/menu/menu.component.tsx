import React, { useEffect, useState } from "react";
import { connect, ConnectedProps, useStore } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "&store/store";
import { Link } from "react-router-dom";
import { Drawer, Row, Col, Button, Divider } from "antd";
import { CookieComponent } from "&styled/cookies/cookie.component";
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
  const [visible, steVisibility] = useState(true);

  /**
   * useEffect performs side-effects on component rendering.
   * It takes a function for side-effects and a dependency list.
   * When dependency list is empty, useEffect runs each time the component rerenders
   * Adding variables to the dependency list will cause useEffect to run each time a variable changes
   */
  useEffect(() => {
    // Write your side-effects here
  }, []);
  const onClose = () => {
    steVisibility(false);
  };
  return (
    <div className="menuBackground">
      <div className="navbarMenu">
        <Link to="/mainprivacy" className="bexMenu">
          BEX
        </Link>

        <div className="navbar-namesMenu">
          <Link
            onClick={() => window.location.replace("/#handlesId")}
            to="/main" 
            className="LinksColor"
          >
            <span className="navbar-names-font1Menu">HOW BEX WORKS</span>
          </Link>

          <Link
            onClick={() => window.location.replace("/#packagesId")}
            to="/main"
            className="LinksColor"
          >
            <span className="navbar-names-fontMenu">PRICING</span>
          </Link>
          <Link
            onClick={() => window.location.replace("/#infoId")}
            to="/main"
            className="LinksColor"
          >
            <span className="navbar-names-fontMenu">ABOUT US</span>
          </Link>
          <Link
            onClick={() => window.location.replace("/#connectId")}
            to="/main"
            className="LinksColor"
          >
            <span className="navbar-names-fontMenu">CONTACT US</span>
          </Link>
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
          </span>
        </div>
        <div className="contrlMenu">
          <span className="Control-Spend-SaveMenu">CONTROL. SPEND. SAVE.</span>
        </div>
      </div>
      <div className="tryDemoMenu">
        <Row>
          <Col push={1}>
            <Link
              onClick={() => window.location.replace("/#tryforFreeId")}
              to="/main"
            >
              <Button type="text" className="Try-for-freeMenu">
                <span className="tryForfreeSpan">Try for free</span>
              </Button>
            </Link>
          </Col>
          <Col push={2}>
            <Button className="get-Your-Demo" ghost>
              <span className="getYourDemoSpan">Get your Demo</span>
            </Button>
          </Col>
        </Row>
      </div>
      <Col push={20}>
        <div className="GreenCercleMenu">
          <img
            src={chatbot}
            srcSet={`${chatbot2} 2x, ${chatbot3} 3x`}
            className="chatbotMenu"
          />
        </div>
      </Col>
      <div className="areebaMasterLogoLeftRight">
        <Col push={3}>
          <Row>
            <Col>
              <Row>
                <Col>
                  <span className="Powered-byMenu">Powered by</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <img
                    src={areeba}
                    srcSet={`${areeba2} 2x, ${areeba3} 3x`}
                    className="Areeba-logoMenu"
                  ></img>
                </Col>
              </Row>
            </Col>
            <Col>
              <Divider type="vertical" className="lineMenu" />
            </Col>
            <Col>
              <Row>
                <Col>
                  <span className="Powered-byMenu">In partnership with</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <img
                    src={mastercard}
                    srcSet={`${mastercard2} 2x, ${mastercard3} 3x`}
                    className="Areeba-logoMenu"
                  ></img>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </div>
      <Drawer
        placement="bottom"
        closable={false}
        visible={visible}
        onClose={onClose}
        key="bottom"
        className="cookieColor"
        height={450}
      >
        <CookieComponent />
      </Drawer>
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
