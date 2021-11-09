import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "&store/store";

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

const { innerWidth: width, innerHeight: height } = window;

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
    <div className="SaveBackground" style={{ height: height }}>
      <div className="HeadPartSave">
        <div className="numberWithSave">
          <div className="Rectangle-24989s">
            <span className="span1s">3</span>
          </div>

          <span className="Saves">Save</span>
        </div>

        <div className="TextTitleSave">
          <span className="Time-is-money-Save-boths">
            TIME IS MONEY. SAVE BOTH
          </span>

          <div className="TextSave">
            <div className="signedTextone">
              <img
                src={sign}
                srcSet={`${sign2} 2x, ${sign3} 3x`}
                className="Signs"
              ></img>

              <div> 
                <span className="Digitize-your-business-expense-process-to-reduce-your-admin-costs">
                  Digitize your business expense process to reduce your admin
                  cost
                </span>
              </div>
            </div>
 
            <div className="signedTexttwo">
              <img
                src={sign2}
                srcSet={`${sign2} 2x, ${sign3} 3x`}
                className="Signs"
              ></img>

              <div>
                <span className="Identify-wasteful-spend-with-one-dashboard-for-all-your-expensess">
                  Identify wasteful spend with one dashboard for all your
                  expenses
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img
          src={saveMobile}
          srcSet={`${saveMobile2} 2x, ${saveMobile3} 3x`}
          className="Save-imgsMobile"
        ></img>
        <img
          src={save}
          srcSet={`${save2} 2x, ${save3} 3x`}
          className="Save-imgs"
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
const SaveComponentRedux = connector(SaveComponent);

export { SaveComponentRedux as SaveComponent };
