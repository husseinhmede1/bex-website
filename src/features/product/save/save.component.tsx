import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "&store/store";
import { Col, Row } from "antd";

import "./save.css";

import save from "&assets/img/Save-img.png";
import save2 from "&assets/img/Save-img@2x.png";
import save3 from "&assets/img/Save-img@3x.png";

import sign from "&assets/img/Sign2.png";
import sign2 from "&assets/img/Sign2@2x.png";
import sign3 from "&assets/img/Sign2@3x.png";

import saveMobile from "&assets/img/save-imgMobile.png";
import saveMobile2 from "&assets/img/save-imgMobile@2x.png";
import saveMobile3 from "&assets/img/save-imgMobile@3x.png";
/**
 *
 *
 * These are actions imported from the feature slices.
 * You can use 'useDispatch' hook or 'mapDispatchToProps'
 * to dispatch these actions
 */
import { loginActions } from "&features/demo/login/login.slice";

type ReduxProps = ConnectedProps<typeof connector>;

const SaveComponent = (props: ReduxProps) => {
  const { logout } = props;
  const { t } = useTranslation(["Save"]);

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
      <div className="SaveBackgroundMobile">
        <Col>
          <Row>
            <Col push={2}>
              <Row>
                <div className="Rectangle-24989s">
                  <span className="span1s">3</span>
                </div>
              </Row>
              <Row>
                <span className="Saves">Save</span>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col push={3}>
              <Row>
                <span className="Time-is-money-Save-boths">
                  TIME IS MONEY.SAVE BOTH
                </span>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col className="digitizeIdentityToBottom" push={3}>
              <Row>
                <Col>
                  <img
                    src={sign}
                    srcSet={`${sign2} 2x, ${sign3} 3x`}
                    className="Signs"
                  ></img>
                </Col>
                <Col push={1}>
                  <span className="Digitize-your-business-expense-process-to-reduce-your-admin-costs">
                    Digitize your business expense process to reduce your admin
                    cost
                  </span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <img
                    src={sign}
                    srcSet={`${sign2} 2x, ${sign3} 3x`}
                    className="Signs2"
                  ></img>
                </Col>
                <Col push={1}>
                  <span className="Identify-wasteful-spend-with-one-dashboard-for-all-your-expensess">
                    Identify wasteful spend with one dashboard for all your
                    expenses
                  </span>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <img
              src={saveMobile}
              srcSet={`${saveMobile2} 2x, ${saveMobile3} 3x`}
              className="Save-imgsMobile"
            ></img>
          </Row>
        </Col>
      </div>

      <div className="SaveBackground">
        <Row>
          <Col push={1}>
            <Row>
              <Col className="FirstSideSaveToBottom" push={3}>
                <div className="Rectangle-24989s">
                  <span className="span1s">3</span>
                </div>
              </Col>
              <Col push={3} className="saveToBottom">
                <span className="Saves">Save</span>
              </Col>
            </Row>
            <Row>
              <Col push={3}>
                <span className="Time-is-money-Save-boths">
                  <div>TIME IS MONEY.</div>
                  <div> SAVE BOTH</div>
                </span>
              </Col>
            </Row>
            <Row className="TextSaveToBottom">
              <Col push={3}>
                <Row>
                  <Col>
                    <img
                      src={sign}
                      srcSet={`${sign2} 2x, ${sign3} 3x`}
                      className="Signs"
                    ></img>
                  </Col>
                  <Col
                    className="Digitize-your-business-expense-process-to-reduce-your-admin-costs"
                    push={1}
                  >
                    <span className="Digitize-your-business-expense-process-to-reduce-your-admin-costs">
                      Digitize your business expense process to reduce your
                      admin cost
                    </span>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <img
                      src={sign}
                      srcSet={`${sign2} 2x, ${sign3} 3x`}
                      className="Signs2"
                    ></img>
                  </Col>
                  <Col
                    className="Identify-wasteful-spend-with-one-dashboard-for-all-your-expensess"
                    push={1}
                  >
                    <span className="Identify-wasteful-spend-with-one-dashboard-for-all-your-expensess">
                      Identify wasteful spend with one dashboard for all your
                      expenses
                    </span>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
 
          <Col push={1}>
            <img
              src={save3} 
              className="Save-imgsSave"
            ></img>
          </Col>
        </Row>
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
const SaveComponentRedux = connector(SaveComponent);

export { SaveComponentRedux as SaveComponent };
