import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "&store/store";
import { Router, Route, Link } from "react-router-dom";
import { useRef, useLayoutEffect } from "react";
import "./terms.css";

import areeba from "&assets/img/areeba-white.png";
import areeba2 from "&assets/img/areeba-white@2x.png";
import areeba3 from "&assets/img/areeba-white@3x.png";

import master from "&assets/img/Mastercard.png";
import master2 from "&assets/img/Mastercard@2x.png";
import master3 from "&assets/img/Mastercard@3x.png";

import play from "&assets/img/167-1679882_play-store-icon-android-app-on-google-play.png";
import play2 from "&assets/img/167-1679882_play-store-icon-android-app-on-google-play@2x.png";
import play3 from "&assets/img/167-1679882_play-store-icon-android-app-on-google-play@3x.png";

import store from "&assets/img/Group-17.png";
import store2 from "&assets/img/Group-17@2x.png";
import store3 from "&assets/img/Group-17@3x.png";
/*
 * These are actions imported from the feature slices.
 * You can use 'useDispatch' hook or 'mapDispatchToProps'
 * to dispatch these actions
 */
//import { homeActions } from "./home.slice";
import { loginActions } from "&features/demo/login/login.slice";
import { Col, Layout, Row } from "antd";
import { Footer } from "antd/lib/layout/layout";

const { innerWidth: width, innerHeight: height } = window;

type ReduxProps = ConnectedProps<typeof connector>;

const TermsComponent = (props: ReduxProps) => {
  const { logout } = props;
  const { t } = useTranslation(["Terms"]);

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
      <div className="screenWidth">
        <div className="termsFlex">
          <div className="textTerms" id={"section1"}>
            <span className="-Acceptance-of-termsTe">
              1. Acceptance of terms
            </span>
            <div className="textTitle">
              <span className="-Lorem-Ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry-Lorem-Ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industryLorem-Ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry-Lorem-Ipsum-is-simply-duTe">
                <span className="text-style-1Te">1.1</span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                <br />
                <br />
                <br />
                <span className="text-style-2Te">1.2</span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.
                <br />
                <br />
                <br />
                <span className="text-style-3Te">1.3</span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.
              </span>
            </div>
          </div>

          <div className="textTerms" id={"section2"}>
            <span className="-Privacy-complaintsTe">2. Privacy complaints</span>

            <div className="textTitle">
              <span className="-Lorem-Ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry-Lorem-Ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industryLorem-Ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry-Lorem-Ipsum-is-simply-duTe">
                <span className="text-style-1Te">2.1</span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                <br />
                <br />
                <br />
                <span className="text-style-2Te">2.2</span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.
              </span>
            </div>
          </div>

          <div className="textTerms" id={"section3"}>
            <span className="-Data-retention-and-data-probabilityTe">
              3. Data retention and data probability
            </span>
            <div className="textTitle">
              <span className="-Lorem-Ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry-Lorem-Ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industryLorem-Ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry-Lorem-Ipsum-is-simply-duTe">
                <span className="text-style-1Te">3.1</span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                <br />
                <br />
                <br />
                <span className="text-style-2Te">3.2</span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.
                <br />
                <br />
                <br />
                <span className="text-style-3Te">3.3</span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.
              </span>
            </div>
          </div>

          <div className="textTerms" id={"section4"}>
            <span className="-How-your-personal-information-is-usedTe">
              4. How your personal information is used
            </span>
            <div className="textTitle">
              <span className="-Lorem-Ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry-Lorem-Ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industryLorem-Ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry-Lorem-Ipsum-is-simply-duTe">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
              </span>
            </div>
          </div>
          <div className="textTerms" id={"section5"}>
            <span className="-Links-to-third-party-siteTe">
              5. Links to third party site
            </span>
            <div className="textTitle">
              <span className="-Lorem-Ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry-Lorem-Ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industryLorem-Ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry-Lorem-Ipsum-is-simply-duTe">
                <span className="text-style-1Te">1.1</span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                <br />
                <br />
                <br />
                <span className="text-style-2Te">1.2</span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.
                <br />
                <br />
                <br />
                <span className="text-style-3Te">1.3</span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.
              </span>
            </div>
          </div>

          <div className="textTerms" id={"section6"}>
            <span className="-Non-discriminationTe">6. Non discrimination</span>
            <div className="textTitle">
              <span className="-Lorem-Ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry-Lorem-Ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industryLorem-Ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry-Lorem-Ipsum-is-simply-duTe">
                <span className="text-style-1Te">2.1</span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                <br />
                <br />
                <br />
                <span className="text-style-2Te">2.2</span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.
              </span>
            </div>
          </div>

          <div className="textTerms" id={"section7"}>
            <span className="-Data-retention-and-data-probabilityTe">
              7. Data retention and data probability
            </span>

            <div className="textTitle">
              <span className="-Lorem-Ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry-Lorem-Ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industryLorem-Ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry-Lorem-Ipsum-is-simply-duTe">
                <span className="text-style-1Te">3.1</span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                <br />
                <br />
                <br />
                <span className="text-style-2Te">3.2</span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.
                <br />
                <br />
                <br />
                <span className="text-style-3Te">3.3</span>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.
              </span>
            </div>
          </div>

          <div className="textTerms" id={"section8"}>
            <span className="-How-your-personal-information-is-usedTe">
              8. How your personal information is used
            </span>
            <div className="textTitle">
              <span className="-Lorem-Ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry-Lorem-Ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industryLorem-Ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry-Lorem-Ipsum-is-simply-duTe">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry.Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
              </span>
            </div>
          </div>
        </div>
        <div className="FooterTermsAntBigScreen">
          <Row>
            <Col className="footerTermsColorAnt">
              <Row>
                <Col>
                  <Row>
                    <Col>
                      <span className="Download-nowTe">Download Now!</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col push={2}>
                      <img
                        src={store}
                        srcSet={`${store2} 2x, ${store3} 3x`}
                        className="Group-17Te"
                      ></img>
                    </Col>
                    <Col push={2}>
                      <img
                        src={play}
                        srcSet={`${play2} 2x, ${play3} 3x`}
                        className="_play-store-icon-android-app-on-google-playTe"
                      ></img>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div className="footerLineTerms"></div>

              <Row>
                <Col push={1}>
                  <img
                    src={areeba}
                    srcSet={`${areeba2} 2x, ${areeba3} 3x`}
                    className="AreebaTe"
                  ></img>
                </Col>
                <Col push={2}>
                  <img
                    src={master}
                    srcSet={`${master2} 2x, ${master3} 3x`}
                    className="MastercardTe"
                  ></img>
                </Col>
                <Col className="PTCToBotom" push={4}>
                  <span className="Privacy-PolicyTe">Privacy Policy</span>
                </Col>
                <Col className="PTCToBotom" push={5}>
                  <span className="Terms-of-ServiceTe">Terms of Service</span>
                </Col>
                <Col className="PTCToBotom" push={6}>
                  <span className="Cookie-PolicyTe">Cookie Policy</span>
                </Col>
                <Col className="PTCToBotom" push={12}>
                  <span className="-Bex-All-Rights-ReservedTe">
                    2021 Bex. All Rights Reserved.
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>

        <div className="FooterTermsAntMobile">
          <Row>
            <Col className="footerTermsColorAnt">
              <Row>
                <Col>
                  <Row>
                    <Col push={2}>
                      <span className="Download-nowTe">Download Now!</span>
                    </Col>
                  </Row>
                  <Row gutter={[16, 16]}>
                    <Col push={2} span={12}>
                      <img
                        src={store}
                        srcSet={`${store2} 2x, ${store3} 3x`}
                        className="Group-17Te"
                      ></img>
                    </Col>
                    <Col span={12} pull={7} className="playFooterToTop">
                      <img
                        src={play}
                        srcSet={`${play2} 2x, ${play3} 3x`}
                        className="_play-store-icon-android-app-on-google-playTe"
                      ></img>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <div style={{ height: 50 }}></div>
              <div className="footerLineTerms"></div>

              <Row>
                <Col push={2}>
                  <img
                    src={areeba}
                    srcSet={`${areeba2} 2x, ${areeba3} 3x`}
                    className="AreebaTeMobile"
                  ></img>
                </Col>
                <Col push={3}>
                  <img
                    src={master}
                    srcSet={`${master2} 2x, ${master3} 3x`}
                    className="MastercardTeMobile"
                  ></img>
                </Col>

                <Col className="PTCToBotom" push={8}>
                  <span className="-Bex-All-Rights-ReservedTeMobile">
                    2021 Bex. All Rights Reserved.
                  </span>
                </Col>
              </Row>
              <Row>
                <Col className="PTCToBotom" push={3}>
                  <span className="Privacy-PolicyTeMobile">Privacy Policy</span>
                </Col>
                <Col className="PTCToBotom" push={3}>
                  <span className="Terms-of-ServiceTeMobile">
                    Terms of Service
                  </span>
                </Col>
                <Col className="PTCToBotom" push={3}>
                  <span className="Cookie-PolicyTeMobile">Cookie Policy</span>
                </Col>
              </Row>
            </Col>
          </Row>
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
const TermsComponentRedux = connector(TermsComponent);

export { TermsComponentRedux as TermsComponent };
