import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "&store/store";
import { InputText } from "&styled/input/input.component";
import { Button, Input } from "antd";

import { Row, Col } from "antd";

import "./connect.css";

import location from "&assets/img/Location.png";
import location2 from "&assets/img/Location@2x.png";
import location3 from "&assets/img/Location@3x.png";

import phone from "&assets/img/Phone.png";
import phone2 from "&assets/img/Phone@2x.png";
import phone3 from "&assets/img/Phone@3x.png";

import email from "&assets/img/Email.png";
import email2 from "&assets/img/Email@2x.png";
import email3 from "&assets/img/Email@3x.png";

import social from "&assets/img/Social-media-icons.png";
import social2 from "&assets/img/Social-media-icons@2x.png";
import social3 from "&assets/img/Social-media-icons@3x.png";

import areeba from "&assets/img/areeba-white.png";
import areeba2 from "&assets/img/areeba-white@2x.png";
import areeba3 from "&assets/img/areeba-white@3x.png";

import master from "&assets/img/Mastercard.png";
import master2 from "&assets/img/Mastercard@2x.png";
import master3 from "&assets/img/Mastercard@3x.png";
/*
 *
 * These are actions imported from the feature slices.
 * You can use 'useDispatch' hook or 'mapDispatchToProps'
 * to dispatch these actions
 */
//import { homeActions } from "./home.slice";
import { loginActions } from "&features/demo/login/login.slice";

type ReduxProps = ConnectedProps<typeof connector>;

const ConnectComponent = (props: ReduxProps) => {
  const { logout } = props;
  const { t } = useTranslation(["Connect"]);

  /**
   * useEffect performs side-effects on component rendering.
   * It takes a function for side-effects and a dependency list.
   * When dependency list is empty, useEffect runs each time the component rerenders
   * Adding v ariables to the dependency list will cause useEffect to run each time a variable changes
   */
  useEffect(() => {
    // Write your side-effects here
  }, []);

  return (
    <div className="connectPageBackground" id={"connectId"}>
      <div className="connectPageContentTwoParts">
        <div className="ConnectContentForBigScreen">
          <Row gutter={[24, 16]} justify="center">
            <Col span={12} push={3}>
              <Row className="LastConnectToBotom">
                <span className="Lets-connectC">
                  <div>Let’s</div>
                  <div>connect</div>
                </span>
              </Row>
              <Row>
                <Col>
                  <img
                    src={location}
                    srcSet={`${location2} 2x, ${location3} 3x`}
                    className="LocationC"
                  />
                </Col>
                <Col>
                  <span className="areeba-sal-M1-Group-M1-Building-Omar-Daouk-St-Beirut-2020-3315-Lebanon-Email-on-supportareebacomC">
                    areeba s.a.l. – M1 Group
                    <br />
                    M1 Building – Omar Daouk St.
                    <br />
                    Beirut 2020 3315 – Lebanon <br />
                    Email on support@areeba.com
                    <br />
                  </span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <img
                    src={phone}
                    srcSet={`${phone2} 2x, ${phone3} 3x`}
                    className="PhoneC"
                  />
                </Col>
                <Col>
                  <span className="-or-01-954-333C">1557 or 01 954 333</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <img
                    src={email}
                    srcSet={`${email2} 2x, ${email3} 3x`}
                    className="EmailC"
                  />
                </Col>
                <Col>
                  <span className="SupportareebacomC">Support@areeba.com</span>
                </Col>
              </Row>
              <Row>
                <div className="Line-5301C"></div>
              </Row>
              <Row>
                <img
                  src={social}
                  srcSet={`${social2} 2x, ${social3} 3x`}
                  className="Social-media-iconsC"
                />
              </Row>
            </Col>
            <Col span={12}>
              <div style={{ height: 70 }}></div>
              <Row>
                <Col push={6}>
                  <span className="Tell-us-more-about-yourselfC">
                    Tell us more about yourself
                  </span>
                </Col>
              </Row>
              <div className="ConnectFields">
                {/*
                <Row gutter={[24, 16]}>
                  <Col span={10} push={5}>
                    <span className="Fist-nameC">First name</span>
                    <InputText style={{ width: "50%" }} />
                  </Col>
                  <Col span={10} push={1}>
                    <span className="Last-nameC">Last name</span>

                    <InputText className="LastNameFieldWidth" />
                  </Col>
                </Row>
                */}
                <Row gutter={8}>
                  <Col span={8} push={5}>
                    <span className="Fist-nameC">First name</span>

                    <Input style={{ width: "70%" }} />
                  </Col>
                  <Col span={8} push={3}>
                    <span className="Last-nameC">Last name</span>

                    <Input style={{ width: "70%" }} />
                  </Col>
                </Row>
                <Row gutter={[24, 16]}>
                  <Col span={10} push={5}>
                    <span className="Email-addressC">Email address</span>

                    <Input style={{ width: "120%", height: "50%" }} />
                  </Col>
                </Row>
                <Row gutter={[24, 16]}>
                  <Col span={10} push={5}>
                    <span className="MessageC">Message</span>

                    <Input style={{ width: "120%", height: "300%" }} />
                  </Col>
                </Row>
                <Row>
                  <Col push={5}>
                    <Button type="text" className="GetInTouchConnect">
                      <span className="GetInTouchConnectSpan">
                        Get in touch
                      </span>
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>

        <div className="ConnectContentForSmallScreen">
          <Row className="LastConnectToBotom" gutter={[16, 40]}>
            <Col push={6}>
              <span className="Lets-connectC">
                <div>Let’s</div>
                <div>connect</div>
              </span>
            </Col>
          </Row>
          <Row className="LastConnectToBotom">
            <Col push={6}>
              <img
                src={location}
                srcSet={`${location2} 2x, ${location3} 3x`}
                className="LocationC"
              />
            </Col>
            <Col push={7}>
              <span className="areeba-sal-M1-Group-M1-Building-Omar-Daouk-St-Beirut-2020-3315-Lebanon-Email-on-supportareebacomC">
                areeba s.a.l. – M1 Group
                <br />
                M1 Building – Omar Daouk St.
                <br />
                Beirut 2020 3315 – Lebanon <br />
                Email on support@areeba.com
                <br />
              </span>
            </Col>
          </Row>
          <Row>
            <Col push={6}>
              <img
                src={phone}
                srcSet={`${phone2} 2x, ${phone3} 3x`}
                className="PhoneC"
              />
            </Col>
            <Col push={7}>
              <span className="-or-01-954-333C">1557 or 01 954 333</span>
            </Col>
          </Row>
          <Row>
            <Col push={6}>
              <img
                src={email}
                srcSet={`${email2} 2x, ${email3} 3x`}
                className="EmailC"
              />
            </Col>
            <Col push={7}>
              <span className="SupportareebacomC">Support@areeba.com</span>
            </Col>
          </Row>
          <Row>
            <Col push={6}>
              <div className="Line-5301C"></div>
            </Col>
          </Row>
          <Row>
            <Col push={6}>
              <img
                src={social}
                srcSet={`${social2} 2x, ${social3} 3x`}
                className="Social-media-iconsC"
              />
            </Col>
          </Row>

          <Row>
            <Col push={5}>
              <span className="Tell-us-more-about-yourselfC">
                Tell us more about yourself
              </span>
            </Col>
          </Row>
          <div className="ConnectFields">
            <Row gutter={[24, 16]}>
              <Col span={10} push={8}>
                <span className="Fist-nameC">First name</span>
                <InputText style={{ width: "50%" }} />
              </Col>
              <Col span={10} push={4}>
                <span className="Last-nameC">Last name</span>

                <InputText style={{ width: "50%" }} />
              </Col>
            </Row>
            <Row gutter={[24, 16]}>
              <Col span={10} push={8}>
                <span className="Email-addressC">Email address</span>

                <Input style={{ width: "120%" }} />
              </Col>
            </Row>
            <Row gutter={[24, 16]}>
              <Col span={10} push={8}>
                <span className="MessageC">Message</span>

                <Input style={{ width: "120%", height: "300%" }} />
              </Col>
            </Row>

            <Row>
              <Col push={5}>
                <Button type="text" className="GetInTouchConnect">
                  <span className="GetInTouchConnectSpan">Get in touch</span>
                </Button>
              </Col>
            </Row>
          </div>
        </div>

        <Row gutter={[16, 40]}>
          <div>
            <div className="FooterLineConnectPage"></div>
            <div className="FooterConnectPage">
              <img
                src={areeba}
                srcSet={`${areeba2} 2x, ${areeba3} 3x`}
                className="AreebaC"
              ></img>
              <img
                src={master}
                srcSet={`${master2} 2x, ${master3} 3x`}
                className="MastercardC"
              ></img>

              <span className="Privacy-PolicyC">Privacy Policy</span>
              <span className="Terms-of-ServiceC">Terms of Service</span>
              <span className="Cookie-PolicyC">Cookie Policy</span>
              <div>
                <span className="-Bex-All-Rights-Reserved">
                  2021 Bex. All Rights Reserved.
                </span>
              </div>
            </div>

            <div className="FooterConnectPageMobile">
              <Row gutter={[30, 16]}>
                <Col span={5} push={2}>
                  <img
                    src={areeba}
                    srcSet={`${areeba2} 2x, ${areeba3} 3x`}
                    className="AreebaCMobile"
                  ></img>
                </Col>
                <Col span={8} push={1}>
                  <img
                    src={master}
                    srcSet={`${master2} 2x, ${master3} 3x`}
                    className="MastercardCMobile"
                  ></img>
                </Col>
                <Col span={3}>
                  <span className="-Bex-All-Rights-ReservedMobile">
                    2021 Bex. All Rights Reserved.
                  </span>
                </Col>
              </Row>
              <Row gutter={[30, 16]}>
                <Col span={8}>
                  <span className="Privacy-PolicyCMobile">Privacy Policy</span>
                </Col>
                <Col span={8}>
                  <span className="Terms-of-ServiceCMobile">
                    Terms of Service
                  </span>
                </Col>
                <Col span={8}>
                  <span className="Cookie-PolicyCMobile">Cookie Policy</span>
                </Col>
              </Row>
            </div>
          </div>
        </Row>
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
const ConnectComponentRedux = connector(ConnectComponent);

export { ConnectComponentRedux as ConnectComponent };
