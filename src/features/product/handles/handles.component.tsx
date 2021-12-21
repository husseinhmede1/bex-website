import React, { useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "&store/store";

import "./handles.css";

import sign from "&assets/img/Sign.png";
import sign2 from "&assets/img/Sign@2x.png";
import sign3 from "&assets/img/Sign@3x.png";

import control from "&assets/img/NewMobileControl-img.png";
import control2 from "&assets/img/NewMobileControl-img@2x.png";
import control3 from "&assets/img/NewMobileControl-img@3x.png";

import spend from "&assets/img/Try-BEX-Mobile.png";
import spend2 from "&assets/img/Try-BEX-Mobile@2x.png";
import spend3 from "&assets/img/Try-BEX-Mobile@3x.png";

/**
 *
 *
 * These are actions imported from the feature slices.
 * You can use 'useDispatch' hook or 'mapDispatchToProps'
 * to dispatch these actions
 */
import { loginActions } from "&features/demo/login/login.slice";
import { Col, Row } from "antd";

type ReduxProps = ConnectedProps<typeof connector>;

const HandlesComponent = (props: ReduxProps) => {
  const { logout } = props;
  const { t } = useTranslation(["Handles"]);
  const [isTextOne, setTextContent] = useState(true);

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
    <div className="Product-page-Controlh" id={"handlesId"}>
      <div className="BEX-loc">
        <span className="BEX-handles-the-hard-stuffh">
          <div>BEX HANDLES</div>
          <div>THE HARD STUFF</div>
        </span>
      </div>
      <div className="twoPartsHandles">
        <div className="numbersTextTwoPartsHandles">
          <Col>
            <Row>
              <Col>
                <Row>
                  <div className="TwoCercleMobileHandles">
                    <Col pull={4}>
                      <Row gutter={[8, 16]}>
                        <Col span={8}>
                          <div
                            onClick={() => {
                              setTextContent(true);
                            }}
                            className="Rectangle-24970h"
                          >
                            <span className="span1h">1</span>
                          </div>
                        </Col>
                        <Col span={8} push={3}>
                          <div className="Line-5297Handles"></div>
                        </Col>
                        <Col span={8} push={6}>
                          <div
                            onClick={() => {
                              setTextContent(false);
                            }}
                            className="Rectangle-24940h"
                          >
                            <span className="span2h">2</span>
                          </div>
                        </Col>
                      </Row>
                      <Row gutter={[8, 16]}>
                        <Col span={12}>
                          <span className="Controlh">Control</span>
                        </Col>
                        <Col span={12} push={8}>
                          <span className="spendh">Spend</span>
                        </Col>
                      </Row>
                    </Col>
                  </div>
                  <div className="TwoCercleScreenHandles">
                    <Col pull={9}>
                      <Row className="CercleOneToTopHandles">
                        <Col>
                          <div
                            onClick={() => {
                              setTextContent(true);
                            }}
                            className="Rectangle-24970h"
                          >
                            <span className="span1h">1</span>
                          </div>
                        </Col>
                        <Col className="ControlWordPositionHandles">
                          <span className="Controlh">Control</span>
                        </Col>
                      </Row>
                      <Row>
                        <Col push={3}>
                          <div className="Line-5297Handles"></div>
                        </Col>
                      </Row>
                      <Row className="CercleTwoToTopHandles">
                        <Col>
                          <div
                            onClick={() => {
                              setTextContent(false);
                            }}
                            className="Rectangle-24940h"
                          >
                            <span className="span2h">2</span>
                          </div>
                        </Col>
                        <Col className="SpendWordPositionHandles">
                          <span className="spendh">Spend</span>
                        </Col>
                      </Row>
                    </Col>
                  </div>
                </Row>
                {isTextOne && (
                  <>
                    <Row>
                      <Col pull={4} className="TitleDigitizeHandles">
                        <span className="Digitize-your-expense-policyh">
                          DIGITIZE YOUR
                          <br />
                          EXPENSE POLICY
                        </span>
                      </Col>
                    </Row>
                    <Row
                      gutter={[8, 16]}
                      className="SignedTextToBotomOfTitleHandles"
                    >
                      <Col pull={4} span={12}>
                        <img
                          src={sign}
                          srcSet={`${sign2} 2x, ${sign3} 3x`}
                          className="SignHandles"
                        ></img>
                      </Col>
                      <Col pull={12} span={12}>
                        <Row>
                          <span className="Set-your-spending-policies-and-simplify-your-administration-processh">
                            Set your spending policies and simplify your
                            <br />
                            administration process.
                          </span>
                        </Row>
                      </Col>
                    </Row>

                    <Row gutter={[8, 16]}>
                      <Col pull={4} span={12}>
                        <img
                          src={sign}
                          srcSet={`${sign2} 2x, ${sign3} 3x`}
                          className="SignHandles"
                        ></img>
                      </Col>
                      <Col span={12} pull={12}>
                        <Row>
                          <span className="Apply-spending-limits-and-restrictions-based-on-each-employee-profile-and-business-needsh">
                            Apply spending limits and restrictions based <br />
                            on each employee profile and business needs
                          </span>
                        </Row>
                      </Col>
                    </Row>
                  </>
                )}
                {!isTextOne && (
                  <>
                    <Row>
                      <Col pull={4} className="TitleDigitizeHandles">
                        <span className="Digitize-your-expense-policyh">
                          DIGITIZE YOUR <br />
                          SPENDING
                        </span>
                      </Col>
                    </Row>
                    <Row
                      gutter={[8, 16]}
                      className="SignedTextToBotomOfTitleHandles"
                    >
                      <Col pull={4} span={12}>
                        <img
                          src={sign}
                          srcSet={`${sign2} 2x, ${sign3} 3x`}
                          className="SignHandles"
                        ></img>
                      </Col>
                      <Col span={12} pull={12}>
                        <Row>
                          <span className="Set-your-spending-policies-and-simplify-your-administration-processh">
                            Issue Digital First cards for your employees
                            <br />
                            business spending’s with built-in controls
                          </span>
                        </Row>
                      </Col>
                    </Row>

                    <Row gutter={[8, 16]}>
                      <Col pull={4} span={12}>
                        <img
                          src={sign}
                          srcSet={`${sign2} 2x, ${sign3} 3x`}
                          className="SignHandles"
                        ></img>
                      </Col>
                      <Col span={12} pull={12}>
                        <Row>
                          <span className="Apply-spending-limits-and-restrictions-based-on-each-employee-profile-and-business-needsh">
                            Spend and capture receipts instantly
                            <br />
                            from your phone
                          </span>
                        </Row>
                      </Col>
                    </Row>
                  </>
                )}
              </Col>
            </Row>
          </Col>
        </div>
        <Row>
          <Col>
            <img src={spend} className="Control-imgHandles"></img>
          </Col>
        </Row>

        <img src={control3} className="Spend-imgHandles"></img>
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
const HandlesComponentRedux = connector(HandlesComponent);

export { HandlesComponentRedux as HandlesComponent };
