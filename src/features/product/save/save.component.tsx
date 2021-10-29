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
    <div className="Path-162309" style={{ height: height }}>
      <div className="div1">
        <div className="div2">
          <div className="Rectangle-24989">
            <span className="span1">3</span>
          </div>

          <span className="Save">Save</span>
        </div>

        <div className="div7">
          <span className="Time-is-money-Save-both">
            TIME IS MONEY. SAVE BOTH
          </span>

          <div className="div3">
            <div className="div4">
              <img
                src={sign}
                srcSet={`${sign2} 2x, ${sign3} 3x`}
                className="Sign"
              ></img>

              <div>
                <span className="Digitize-your-business-expense-process-to-reduce-your-admin-cost">
                  Digitize your business expense process to reduce your admin
                  cost
                </span>
              </div>
            </div>

            <div className="div5">
              <img
                src={sign2}
                srcSet={`${sign2} 2x, ${sign3} 3x`}
                className="Sign"
              ></img>

              <div>
                <span className="Identify-wasteful-spend-with-one-dashboard-for-all-your-expenses">
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
          src={save}
          srcSet={`${save2} 2x, ${save3} 3x`}
          className="Save-img"
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
