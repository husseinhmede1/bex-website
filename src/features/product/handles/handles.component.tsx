import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "&store/store";

import "./handles.css";

import { CookieComponent } from "&styled/cookies/cookie.component";
import spend from "&assets/img/Spend-img.png";
import spend2 from "&assets/img/Spend-img@2x.png";
import spend3 from "&assets/img/Spend-img@3x.png";

import sign from "&assets/img/Sign.png";
import sign2 from "&assets/img/Sign@2x.png";
import sign3 from "&assets/img/Sign@3x.png";

import control from "&assets/img/Control-img.png";
import control2 from "&assets/img/Control-img@2x.png";
import control3 from "&assets/img/Control-img@3x.png";
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
    <div className="Product-page-Controlh" id={'handlesId'}>
      <div className="BEX-loc">
        <span className="BEX-handles-the-hard-stuffh">
          <div>BEX HANDLES</div>
          <div>THE HARD STUFF</div> 
        </span> 
      </div> 
      <div className="twoPartsHandles">
        <div className="numbersTextTwoPartsHandles">
          <div className="controlSpendHandles">
            <div className="numbersHandles">
              <div className="Rectangle-24970h">
                <span className="span1h">1</span>
              </div> 
              <div className="Line-5297h"></div>

              <div className="Rectangle-24940h">
                <span className="span2h">2</span>
              </div>
            </div>

            <div className="controlSpendSpanHandles">
              <span className="Controlh">Control</span>

              <span className="spendh">Spend</span>
            </div>
          </div>

          <div className="signedTextHandles">
            <span className="Digitize-your-expense-policyh">
              DIGITIZE YOUR EXPENSE POLICY
            </span>

            <div className="signedTextoneHandles">
              <img
                src={sign}
                srcSet={`${sign2} 2x, ${sign3} 3x`}
                className="SignHandles"
              ></img>
              <span className="Set-your-spending-policies-and-simplify-your-administration-processh">
                Set your spending policies and simplify your administration
                process.
              </span>
            </div>

            <div className="signedTextoneHandles">
              <img
                src={sign}
                srcSet={`${sign2} 2x, ${sign3} 3x`}
                className="SignHandles"
                alt="s"
              ></img>
              <span className="Apply-spending-limits-and-restrictions-based-on-each-employee-profile-and-business-needsh">
                Apply spending limits and restrictions based on each employee
                profile and business needs
              </span>
            </div>
          </div>
        </div> 
          <img 
            src={control}
            srcSet={`${control2} 2x, ${control3} 3x`}
            className="Control-imgHandles"
          ></img>
          <img
            src={spend}
            srcSet={`${spend2} 2x, ${spend3} 3x`}
            className="Spend-imgHandles"
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
const HandlesComponentRedux = connector(HandlesComponent);

export { HandlesComponentRedux as HandlesComponent };
