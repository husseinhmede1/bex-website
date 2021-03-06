import React, { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "&store/store";

import { Row, Col, Button, Card, Carousel } from "antd";
import "./packages.css";

import sign from "&assets/img/Sign3.png";
import sign2 from "&assets/img/Sign3@2x.png";
import sign3 from "&assets/img/Sign3@3x.png";
/*
 *
 * These are actions imported from the feature slices.
 * You can use 'useDispatch' hook or 'mapDispatchToProps'
 * to dispatch these actions
 */
//import { homeActions } from "./home.slice";
import { loginActions } from "&features/demo/login/login.slice";

type ReduxProps = ConnectedProps<typeof connector>;

const PackagesComponent = (props: ReduxProps) => {
  const { logout } = props;
  const { t } = useTranslation(["Connect"]);

  /**
   * useEffect performs side-effects on component rendering.
   * It takes a function for side-effects and a dependency list.
   * When dependency list is empty, useEffect runs each time the component rerenders
   * Adding v ariables to the dependency list will cause useEffect to run each time a variable changes
   */

  return (
    <div id={"packagesId"}>
      <div className="MobilePackages">
        <Row>
          <Col>
            <Row className="toBottomPackages">
              <Col push={7}>
                <span className="OUR-PackagesC">OUR PACKAGES</span>
              </Col>
            </Row>
            <Row>
              <Col push={1}>
                <span className="Choose-the-features-and-functionalities-your-teams-need-today-Easily-upgrade-as-your-company-growsC">
                  Choose the features and functionalities your teams need today.
                  Easily upgrade as your company grows.
                </span>
              </Col>
            </Row>
          </Col>
        </Row>

        <Carousel  className="PackagesToTheLeft">
          <div className="dotsPackages">
            <Card style={{width: 300, height: 400}}>
              <Row>
                <Col push={3}>
                  <span className="EssentialMobilePackages">Essential</span>
                </Col>
              </Row> 
              <Row>
                <Col push={9}>
                  <span className="Starting-atMobilePackages">Starting at</span>
                </Col>
              </Row>

              <Row>
                <Col push={7}>
                  <span className="AED300MobilePackages">
                    <span className="text-style-1MobilePackages">AED</span>3.00
                  </span>
                </Col>
              </Row>
              <Row>
                <Col push={8}>
                  <span className="User-MonthMobilePackages">User /Month</span>
                </Col>
              </Row>

              <Row className="signedTextToBotom">
                <Col push={5}>
                  <Row>
                    <Col>
                      <img
                        src={sign}
                        srcSet={`${sign2} 2x, ${sign3} 3x`}
                        className="SignMobilePackages"
                      ></img>
                    </Col>
                    <Col>
                      <span className="Digital-onboardingMobilePackages">
                        Digital onboarding
                      </span>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <img
                        src={sign}
                        srcSet={`${sign2} 2x, ${sign3} 3x`}
                        className="SignMobilePackages"
                      ></img>
                    </Col>
                    <Col>
                      <span className="Digital-cardMobilePackages">
                        Digital card
                      </span>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <img
                        src={sign}
                        srcSet={`${sign2} 2x, ${sign3} 3x`}
                        className="SignMobilePackages"
                      ></img>
                    </Col>
                    <Col>
                      <span className="Card-controlsMobilePackages">
                        Card controls
                      </span>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="toBottomPackages">
                <Col push={4}>
                  <Row>
                    <Col push={5}>
                      <span className="Stolen-card-fee1MobilePackages">
                        Stolen card fee
                      </span>
                    </Col>
                  </Row>
                  <Row>
                    <span className="Free-up-to-3-then-AED-5MobilePackages">
                      AED 5
                    </span>
                  </Row>
                </Col>
              </Row>
              <Row className="toBottomPackages">
                <Col push={6}>
                  <Button
                    type="primary"
                    className="ContactUsButton1MobilePackages"
                  >
                    <span className="Contact-UsMobilePackages">Contact Us</span>
                  </Button>
                </Col>
              </Row>
              <Row className="toBottomPackages">
                <Col push={3}>
                  <span className="aed-15-on-Additional-account-Up-to-10-usersMobilePackages">
                    AED 10 on Additional account
                    <span className="text-style-1MobilePackages">
                      Up to 5 users
                    </span>
                  </span>
                </Col>
              </Row>
            </Card>
          </div>
          <div>
            <Card style={{ width: 300, height: 400 }}>
              <Row>
                <Col push={5}>
                  <span className="EssentialMobilePackages">Pro</span>
                </Col>
              </Row>
              <Row>
                <Col push={9}>
                  <span className="Starting-atMobilePackages">Starting at</span>
                </Col>
              </Row>

              <Row>
                <Col push={7}>
                  <span className="AED300MobilePackages">
                    <span className="text-style-1MobilePackages">AED</span>5.00
                  </span>
                </Col>
              </Row>
              <Row>
                <Col push={8}>
                  <span className="User-MonthMobilePackages">User /Month</span>
                </Col>
              </Row>

              <Row className="signedTextToBotom">
                <Col push={5}>
                  <Row>
                    <Col>
                      <img
                        src={sign}
                        srcSet={`${sign2} 2x, ${sign3} 3x`}
                        className="SignMobilePackages"
                      ></img>
                    </Col>
                    <Col>
                      <span className="Digital-onboardingMobilePackages">
                        Physical card request
                      </span>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <img
                        src={sign}
                        srcSet={`${sign2} 2x, ${sign3} 3x`}
                        className="SignMobilePackages"
                      ></img>
                    </Col>
                    <Col>
                      <span className="Digital-cardMobilePackages">
                        Priority in call center
                      </span>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <img
                        src={sign}
                        srcSet={`${sign2} 2x, ${sign3} 3x`}
                        className="SignMobilePackages"
                      ></img>
                    </Col>
                    <Col>
                      <span className="Card-controlsMobilePackages">
                        Priority in call center
                      </span>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="toBottomPackages">
                <Col push={4}>
                  <Row>
                    <Col push={5}>
                      <span className="Stolen-card-fee1MobilePackages">
                        Stolen card fee
                      </span>
                    </Col>
                  </Row>
                  <Row>
                    <span className="Free-up-to-3-then-AED-5MobilePackages">
                      Free up to 3, then AED 5
                    </span>
                  </Row>
                </Col>
              </Row>
              <Row className="toBottomPackages">
                <Col push={6}>
                  <Button
                    type="primary"
                    className="ContactUsButton2MobilePackages"
                  >
                    <span className="Contact-UsMobilePackages">Contact Us</span>
                  </Button>
                </Col>
              </Row>
              <Row className="toBottomPackages">
                <Col push={3}>
                  <span className="aed-15-on-Additional-account-Up-to-10-usersMobilePackages">
                    AED 15 on Additional account
                    <span className="text-style-1MobilePackages">
                      Up to 10 users
                    </span>
                  </span>
                </Col>
              </Row>
            </Card>
          </div>
          <div>
            <Card style={{ width: 300, height: 400 }}>
              <Row>
                <Col push={3}>
                  <span className="EssentialMobilePackages">Enterprise</span>
                </Col>
              </Row>
              <Row>
                <Col push={9}>
                  <span className="Starting-atMobilePackages">Starting at</span>
                </Col>
              </Row>

              <Row>
                <Col push={7}>
                  <span className="AED300MobilePackages">
                    <span className="text-style-1MobilePackages">AED</span>10.00
                  </span>
                </Col>
              </Row>
              <Row>
                <Col push={8}>
                  <span className="User-MonthMobilePackages">User /Month</span>
                </Col>
              </Row>

              <Row className="signedTextToBotom">
                <Col push={5}>
                  <Row>
                    <Col>
                      <img
                        src={sign}
                        srcSet={`${sign2} 2x, ${sign3} 3x`}
                        className="SignMobilePackages"
                      ></img>
                    </Col>
                    <Col>
                      <span className="Digital-onboardingMobilePackages">
                        Dedicated support agent
                      </span>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <img
                        src={sign}
                        srcSet={`${sign2} 2x, ${sign3} 3x`}
                        className="SignMobilePackages"
                      ></img>
                    </Col>
                    <Col>
                      <span className="Digital-cardMobilePackages">
                        Multiple admin access
                      </span>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <img
                        src={sign}
                        srcSet={`${sign2} 2x, ${sign3} 3x`}
                        className="SignMobilePackages"
                      ></img>
                    </Col>
                    <Col>
                      <span className="Card-controlsMobilePackages">
                        Multiple entity consolidation
                      </span>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="toBottomPackages">
                <Col push={4}>
                  <Row>
                    <Col push={5}>
                      <span className="Stolen-card-fee1MobilePackages">
                        Stolen card fee
                      </span>
                    </Col>
                  </Row>
                  <Row>
                    <span className="Free-up-to-3-then-AED-5MobilePackages">
                      Free up to 5, then AED 5
                    </span>
                  </Row>
                </Col>
              </Row>
              <Row className="toBottomPackages">
                <Col push={6}>
                  <Button
                    type="primary"
                    className="ContactUsButton3MobilePackages"
                  >
                    <span className="Contact-UsMobilePackages">Contact Us</span>
                  </Button>
                </Col>
              </Row>
              <Row className="toBottomPackages">
                <Col push={3}>
                  <span className="aed-15-on-Additional-account-Up-to-10-usersMobilePackages">
                    AED 15 on Additional account
                    <span className="text-style-1MobilePackages">
                      Up to 10 users
                    </span>
                  </span>
                </Col>
              </Row>
            </Card>
          </div>
        </Carousel>
      </div>
      <div className="packagesBackground">
        <div className="HeadOfPagePackages">
          <span className="OUR-Packagesp">OUR PACKAGES</span>

          <span className="Choose-the-features-and-functionalities-your-teams-need-today-Easily-upgrade-as-your-company-growsp">
            Choose the features and functionalities your teams need today.
            Easily upgrade as your company grows.
          </span>
        </div>

        <div className="PagePackagesContent">
          <div className="firstRectanglePackages">
            <div className="packagesTitleFirstRows">
              <span className="Essentialp">Essential</span>
              <span className="Starting-atp">Starting at</span>
              <span className="AED300p">
                <span className="text-style-1p">AED</span>3.00
              </span>
              <span className="User-Monthp">User /Month</span>
            </div>

            <div className="packagesRectangleSignedText">
              <div className="signAndTextSameLine">
                <img
                  src={sign}
                  srcSet={`${sign2} 2x, ${sign3} 3x`}
                  className="Signp"
                ></img>
                <span className="Digital-onboardingp">Digital onboarding</span>
              </div>
              <div className="signAndTextSameLine">
                <img
                  src={sign}
                  srcSet={`${sign2} 2x, ${sign3} 3x`}
                  className="Signp"
                ></img>
                <span className="Digital-cardp">Digital card</span>
              </div>
              <div className="signAndTextSameLine">
                <img
                  src={sign}
                  srcSet={`${sign2} 2x, ${sign3} 3x`}
                  className="Signp"
                ></img>

                <span className="Card-controlsp">Card controls</span>
              </div>
            </div>

            <div className="packagesStolenAED">
              <span className="Stolen-card-feep">Stolen card fee</span>

              <span className="AED-5p">AED 5</span>
            </div>

            <div className="firstContactButton">
              <span className="Contact-Usp">Contact Us</span>
            </div>

            <span className="aed-10-on-Additional-account-Up-to-5-usersp">
              AED 10 on Additional account
              <span className="text-style-1p">Up to 5 users</span>
            </span>
          </div>

          <div className="secondRectanglePackages">
            <div className="packagesTitleFirstRows">
              <span className="prop">Pro</span>
              <span className="Starting-atp">Starting at</span>
              <span className="AED500p">
                <span className="text-style-1p">AED</span>5.00
              </span>
              <span className="User-Monthp">User /Month</span>
            </div>

            <div className="packagesRectangleSignedText">
              <div>
                <img
                  src={sign}
                  srcSet={`${sign2} 2x, ${sign3} 3x`}
                  className="Signp"
                ></img>

                <span className="Physical-card-requestp">
                  Physical card request
                </span>
              </div>
              <div>
                <img
                  src={sign}
                  srcSet={`${sign2} 2x, ${sign3} 3x`}
                  className="Signp"
                ></img>

                <span className="Priority-in-call-centerp">
                  Priority in call center
                </span>
              </div>
              <div>
                <img
                  src={sign}
                  srcSet={`${sign2} 2x, ${sign3} 3x`}
                  className="Signp"
                ></img>

                <span className="Priority-in-call-centerp">
                  Priority in call center
                </span>
              </div>
            </div>

            <div className="packagesStolenAED">
              <span className="Stolen-card-fee1p">Stolen card fee</span>

              <span className="Free-up-to-3-then-AED-5p">
                Free up to 3, then AED 5
              </span>
            </div>

            <div className="secondContactButton">
              <span className="Contact-Usp">Contact Us</span>
            </div>
            <span className="aed-15-on-Additional-account-Up-to-10-usersp">
              AED 15 on Additional account
              <span className="text-style-1p">Up to 10 users</span>
            </span>
          </div>

          <div className="thyrdRectanglePackages">
            <div className="packagesTitleFirstRows">
              <span className="entreprisep">Entreprise</span>
              <span className="Starting-at1p">Starting at</span>
              <span className="AED1000p">
                <span className="text-style-1p">AED</span>10.00
              </span>
              <span className="User-Monthp">User /Month</span>
            </div>

            <div className="packagesRectangleSignedText">
              <div>
                <img
                  src={sign}
                  srcSet={`${sign2} 2x, ${sign3} 3x`}
                  className="Signp"
                ></img>
                <span className="Dedicated-support-agentp">
                  Dedicated support agent
                </span>
              </div>
              <div>
                <img
                  src={sign}
                  srcSet={`${sign2} 2x, ${sign3} 3x`}
                  className="Signp"
                ></img>
                <span className="Multiple-admin-accessp">
                  Multiple admin access
                </span>
              </div>
              <div>
                <img
                  src={sign}
                  srcSet={`${sign2} 2x, ${sign3} 3x`}
                  className="Signp"
                ></img>
                <span className="Multiple-entity-consolidationp">
                  Multiple entity consolidation
                </span>
              </div>
            </div>

            <div className="packagesStolenAEDtwo">
              <div>
                <span className="Stolen-card-fee2p">Stolen card fee</span>
              </div>
              <div>
                <span className="Free-up-to-5-then-AED-5p">
                  Free up to 5, then AED 5
                </span>
              </div>
            </div>

            <div className="thyrdContactButton">
              <span className="Contact-Usp">Contact Us</span>
            </div>

            <span className="Unlimitedp">Unlimited</span>
          </div>
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
const PackagesComponentRedux = connector(PackagesComponent);

export { PackagesComponentRedux as PackagesComponent };
