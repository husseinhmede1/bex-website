import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "&store/store";

import "./handles.css";

import spend from "&assets/img/Spend-img.png";
import spend2 from "&assets/img/Spend-img@2x.png";
import spend3 from "&assets/img/Spend-img@3x.png";

import sign from "&assets/img/Sign.png";
import sign2 from "&assets/img/Sign@2x.png";
import sign3 from "&assets/img/Sign@3x.png";

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

const HandlesComponent = (props: ReduxProps) => {
  const { logout } = props;
  const { t } = useTranslation(["Handles"]);

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
    <div className="Product-page-Control">
      <span className="BEX-handles-the-hard-stuff">
        <div>BEX HANDLES</div>
        <div>THE HARD STUFF</div>
      </span>

      <div className="div1">
        <div className="div2">
          <div className="div3">
            <div className="div4">
              <div className="Rectangle-24970">
                <span className="span1">1</span>
              </div>
              <div className="Line-5297"></div>

              <div className="Rectangle-24940">
                <span className="span2">2</span>
              </div>
            </div>

            <div className="div5">
              <span className="Control">Control</span>

              <span className="spend">Spend</span>
            </div>
          </div>

          <div className="div6">
            <span className="Digitize-your-expense-policy">
              DIGITIZE YOUR EXPENSE POLICY
            </span>

            <div className="div7">
              <img
                src={sign}
                srcSet={`${sign2} 2x, ${sign3} 3x`}
                className="Sign"
              ></img>
              <span className="Set-your-spending-policies-and-simplify-your-administration-process">
                Set your spending policies and simplify your administration
                process.
              </span>
            </div>

            <div className="div7">
              <img
                src={sign}
                srcSet={`${sign2} 2x, ${sign3} 3x`}
                className="Sign"
                alt="s"
              ></img>
              <span className="Apply-spending-limits-and-restrictions-based-on-each-employee-profile-and-business-needs">
                Apply spending limits and restrictions based on each employee
                profile and business needs
              </span>
            </div>
          </div>
        </div>
        <div>
          <img
            src={spend}
            srcSet={`${spend2} 2x, ${spend3} 3x`}
            className="Spend-img"
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
const HandlesComponentRedux = connector(HandlesComponent);

export { HandlesComponentRedux as HandlesComponent };
