import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "&store/store";

import "./info.css";

import mask from "&assets/img/Mask-Group3.png";
import mask2 from "&assets/img/Mask-Group3@2x.png";
import mask3 from "&assets/img/Mask-Group3@3x.png";

import maskmobile from "&assets/img/InfoimgMobile.png";
import maskmobile2 from "&assets/img/InfoimgMobile@2x.png";
import maskmobile3 from "&assets/img/InfoimgMobile@3x.png";

import areeba from "&assets/img/areeba-white.png";
import areeba2 from "&assets/img/areeba-white@2x.png";
import areeba3 from "&assets/img/areeba-white@3x.png";

import master from "&assets/img/Mastercard-Txt.png";
import master2 from "&assets/img/Mastercard-Txt@2x.png";
import master3 from "&assets/img/Mastercard-Txt@3x.png";
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

const InfoComponent = (props: ReduxProps) => {
  const { logout } = props;
  const { t } = useTranslation(["Info"]);

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
    <div className="infoPageBackground">
      <div className="navyBlueColorInfo" />
      <div className="twoPartsInfoPage">
        <div className="firstPartInfoPage">
          <span className="We-are-BEXI">WE ARE BEX</span>

          <span className="Designed-by-a-team-of-experts-from-areeba-and-Mastercard-with-extensive-knowledge-in-fintech-and-digital-payments-with-the-mission-of-helping-businesses-save-time-and-moneyI">
            Designed by a team of experts from areeba and Mastercard with
            extensive knowledge in fintech and digital payments, with the
            mission of helping businesses save time and money
          </span>
          <img
            src={mask}
            srcSet={`${mask2} 2x, ${mask3} 3x`}
            className="Mask-Group-545I"
          ></img>

          <img
            src={maskmobile}
            srcSet={`${maskmobile2} 2x, ${maskmobile3} 3x`}
            className="Mobile-Img-Info"
          ></img>
        </div>

        <div className="secondPartInfoPage">
          <div className="areebaMasterTextsInfoPage">
            <img
              src={areeba}
              srcSet={`${areeba2} 2x, ${areeba3} 3x`}
              className="areeba-whiteI"
            ></img>
            <span className="areeba-is-a-leading-financial-technology-company-driven-forward-by-the-innovative-approach-of-changing-the-way-payments-are-made-For-more-info-visit-our-website-areebacomI">
              areeba is a leading financial technology company driven forward by
              the innovative approach of changing the way payments are made. For
              more info visit our website
              <span className="text-style-1I">areeba.com</span>
            </span>
          </div>
          <div className="areebaMasterTextsInfoPage">
            <img
              src={master}
              srcSet={`${master2} 2x, ${master3} 3x`}
              className="Mastercard-TxtI"
            ></img>

            <span className="Mastercard-is-a-global-technology-company-in-the-payments-industry-Our-mission-is-to-connect-and-power-an-inclusive-digital-economy-that-benefits-everyone-everywhere-by-making-transactions-safe-simple-smart-and-accessible-For-more-info-visit-our-websI">
              Mastercard is a global technology company in the payments
              industry. Our mission is to connect and power an inclusive,
              digital economy that benefits everyone, everywhere by making
              transactions safe, simple, smart and accessible. For more info
              visit our website
              <span className="text-style-1I">mastercard.com</span>
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
const InfoComponentRedux = connector(InfoComponent);

export { InfoComponentRedux as InfoComponent };
