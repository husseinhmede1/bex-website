import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "&store/store";

import "./packages.css";

import sign from "&assets/img/Sign3.png";
import sign2 from "&assets/img/Sign3@2x.png";
import sign3 from "&assets/img/Sign3@3x.png";

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

const PackagesComponent = (props: ReduxProps) => {
  const { logout } = props;
  const { t } = useTranslation(["Packages"]);

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
    <div className="packagesBackground">
      <div className="HeadOfPagePackages">
        <span className="OUR-Packagesp">OUR PACKAGES</span>

        <span className="Choose-the-features-and-functionalities-your-teams-need-today-Easily-upgrade-as-your-company-growsp">
          Choose the features and functionalities your teams need today. Easily
          upgrade as your company grows.
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
            <div>
              <img
                src={sign}
                srcSet={`${sign2} 2x, ${sign3} 3x`}
                className="Signp"
              ></img>
              <span className="Digital-onboardingp">Digital onboarding</span>
            </div>
            <div>
              <img
                src={sign}
                srcSet={`${sign2} 2x, ${sign3} 3x`}
                className="Signp"
              ></img>
              <span className="Digital-cardp">Digital card</span>
            </div>
            <div>
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

        <div className="MobileRectanglesecondPackages"></div>
      </div>
      <div className="cercleMobileExistPackages">
        <div className="miniBlueCerclePackages"></div>

        <div className="minisecondCerclePackages"></div>
        <div className="minithyrdCerclePackages"></div>
      </div>
    </div>
  );
};

/**
 * Maps state variables  from redux store to props of currect component
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
