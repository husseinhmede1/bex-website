import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "&store/store";

import "./challanges.css";

import down from "&assets/img/down-arrow.png";
import down2 from "&assets/img/down-arrow@2x.png";
import down3 from "&assets/img/down-arrow@3x.png";

import icons2 from "&assets/img/Icons2.png";
import icons22 from "&assets/img/Icons2@2x.png";
import icons23 from "&assets/img/Icons2@3x.png";

import icons1 from "&assets/img/Icons.png";
import icons12 from "&assets/img/Icons@2x.png";
import icons13 from "&assets/img/Icons@3x.png";

import icons3 from "&assets/img/Icons1.png";
import icons32 from "&assets/img/Icons1@2x.png";
import icons33 from "&assets/img/Icons1@3x.png";

import icons4 from "&assets/img/Icon1challengesMobile.png";
import icons42 from "&assets/img/Icon1challengesMobile@2x.png";
import icons43 from "&assets/img/Icon1challengesMobile@3x.png";

import icons5 from "&assets/img/Icons3MobileChallenges.png";
import icons52 from "&assets/img/Icons3MobileChallenges@2x.png";
import icons53 from "&assets/img/Icons3MobileChallenges@3x.png";

import icons6 from "&assets/img/Icons2MobileChallenges.png";
import icons62 from "&assets/img/Icons2MobileChallenges@2x.png";
import icons63 from "&assets/img/Icons2MobileChallenges@3x.png";
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

const ChallangesComponent = (props: ReduxProps) => {
  const { logout } = props;
  const { t } = useTranslation(["Challanges"]);

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
    <div style={{ height: height }}>
      <div className="CornerChallanges">
        <img
          src={down}
          srcSet={`${down2} 2x, ${down3} 3x`}
          className="down-arrow"
        />
      </div>
      <div className="PageContainChallanges">
        <div className="rightTextChallanges">
          <span className="What-are-your-challenges">
            <div> WHAT ARE YOUR </div>
            <div>CHALLENGES?</div>
          </span>

          <span className="Day-to-day-business-expenses-procedures-are-time-consuming-and-drowning-your-team-in-complex-daily-tasks">
            Day-to-day business expenses procedures are time consuming and
            drowning your team in complex daily tasks
          </span>
        </div>

        <div>
          <div className="icon1">
            <img
              src={icons2}
              srcSet={`${icons22} 2x, ${icons23} 3x`}
              className="Icons"
            ></img>

            <img
              src={icons43}
              srcSet={`${icons42} 2x, ${icons4} 3x`}
              className="IconsMobile"
            ></img>
            <span className="Lack-of-visibility-on-How-where-and-how-much-employees-are-spending">
              Lack of visibility on: How, where and how much employees are
              spending
            </span>
          </div>

          <div className="Line-5279"></div>

          <div className="icon1">
            <img
              src={icons3}
              srcSet={`${icons32} 2x, ${icons33} 3x`}
              className="Icons1"
            ></img>

            <img
              src={icons5}
              srcSet={`${icons52} 2x, ${icons53} 3x`}
              className="IconsMobile1"
            ></img>
            <span className="No-tools-in-hand-to-control-How-where-how-much-employees-spend">
              No tools in hand to control : How, where & how much employees
              spend
            </span>
          </div>

          <div className="Line-5280"></div>

          <div className="icon1">
            <img
              src={icons1}
              srcSet={`${icons12} 2x, ${icons13} 3x`}
              className="Icons2"
            ></img>

            <img
              src={icons6}
              srcSet={`${icons62} 2x, ${icons63} 3x`}
              className="IconsMobile2"
            ></img>
            <span className="Lengthy-manual-reconciliation">
              Lengthy manual reconciliation.
            </span>
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
const ChallangesComponentRedux = connector(ChallangesComponent);

export { ChallangesComponentRedux as ChallangesComponent };
