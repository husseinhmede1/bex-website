import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "&store/store";

import "./benefits.css";

import mask from "&assets/img/Mask-Group.png";
import mask2 from "&assets/img/Mask-Group@2x.png";
import mask3 from "&assets/img/Mask-Group@3x.png";

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

const BenefitsComponent = (props: ReduxProps) => {
  const { logout } = props;
  const { t } = useTranslation(["Benefits"]);

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
      <div className="Rectangle-24927B">
        <div>
          <img
            src={mask}
            srcSet={`${mask2} 2x, ${mask3} 3x`}
            className="Mask-GroupB"
          ></img>
        </div>{" "}
        <div className="div1B">
          {" "}
          <span className="BenefitsB">BENEFITS</span>
          <div className="Rectangle-24856B">
            <span className="span1B">53%</span>
            <span className="stated-improved-supplier-relationsB">
              stated ‘improved supplier relations’
            </span>
          </div>
          <div className="Rectangle-24920B">
            <span className="span2B">42%</span>
            <span className="stated-reduced-number-of-approvalsB">
              stated ‘reduced number of approvals
            </span>
          </div>
          <div className="Rectangle-24918B">
            <span className="span3B">63%</span>
            <span className="stated-improved-visibility-and-data-reportingB">
              stated ‘improved visibility and data reporting’
            </span>
          </div>
          <div className="Rectangle-24919B">
            <span className="span4B">47%</span>
            <span className="stated-improved-cash-flowB">
              stated ‘improved cash flow’
            </span>
          </div>
          <div className="Rectangle-24917B">
            <span className="span5B">68%</span>
            <span className="stated-reduced-admin-costB">
              stated ‘reduced admin cost’
            </span>
          </div>
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
const BenefitsComponentRedux = connector(BenefitsComponent);

export { BenefitsComponentRedux as BenefitsComponent };
