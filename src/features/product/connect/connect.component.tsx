import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "&store/store";

import "./connect.css";

import footer from "&assets/img/Footer-bg-img.png";
import footer2 from "&assets/img/Footer-bg-img@2x.png";
import footer3 from "&assets/img/Footer-bg-img@3x.png";

import location from "&assets/img/Location.png";
import location2 from "&assets/img/Location@2x.png";
import location3 from "&assets/img/Location@3x.png";

import phone from "&assets/img/Phone.png";
import phone2 from "&assets/img/Phone@2x.png";
import phone3 from "&assets/img/Phone@3x.png";

import email from "&assets/img/Email.png";
import email2 from "&assets/img/Email@2x.png";
import email3 from "&assets/img/Email@3x.png";

import social from "&assets/img/Social-media-icons.png";
import social2 from "&assets/img/Social-media-icons@2x.png";
import social3 from "&assets/img/Social-media-icons@3x.png";

import areeba from "&assets/img/areeba-white.png";
import areeba2 from "&assets/img/areeba-white@2x.png";
import areeba3 from "&assets/img/areeba-white@3x.png";

import master from "&assets/img/Mastercard.png";
import master2 from "&assets/img/Mastercard@2x.png";
import master3 from "&assets/img/Mastercard@3x.png";
/*
 *
 * These are actions imported from the feature slices.
 * You can use 'useDispatch' hook or 'mapDispatchToProps'
 * to dispatch these actions
 */
//import { homeActions } from "./home.slice";
import { loginActions } from "&features/demo/login/login.slice";

const { innerWidth: width, innerHeight: height } = window;

type ReduxProps = ConnectedProps<typeof connector>;

const ConnectComponent = (props: ReduxProps) => {
  const { logout } = props;
  const { t } = useTranslation(["Connect"]);

  /**
   * useEffect performs side-effects on component rendering.
   * It takes a function for side-effects and a dependency list.
   * When dependency list is empty, useEffect runs each time the component rerenders
   * Adding v ariables to the dependency list will cause useEffect to run each time a variable changes
   */
  useEffect(() => {
    // Write your side-effects here
  }, []);

  return (
    <div className="div1c">
      {" "}
      <div className="div2c">
        <div className="div29C">
          <div className="div28C">
            <div className="div11C">
              <span className="Lets-connectC">
                <div>Let’s</div>
                <div>connect</div>
              </span>
            </div>
            <div className="div12C">
              <div className="div10C">
                <img
                  src={location}
                  srcSet={`${location2} 2x, ${location3} 3x`}
                  className="LocationC"
                />
                <span className="areeba-sal-M1-Group-M1-Building-Omar-Daouk-St-Beirut-2020-3315-Lebanon-Email-on-supportareebacomC">
                  <div>areeba s.a.l. – M1 Group</div>
                  <div> M1 Building – Omar Daouk St.</div>
                  <div> Beirut 2020 3315 – Lebanon </div>
                  <div>Email on support@areeba.com</div>
                </span>
              </div>
              <div className="div9C">
                <img
                  src={phone}
                  srcSet={`${phone2} 2x, ${phone3} 3x`}
                  className="PhoneC"
                />

                <span className="-or-01-954-333C">1557 or 01 954 333</span>
              </div>
              <div className="div5C">
                <img
                  src={email}
                  srcSet={`${email2} 2x, ${email3} 3x`}
                  className="EmailC"
                />

                <span className="SupportareebacomC">Support@areeba.com</span>
              </div>
            </div>
            <div className="Line-5301C"></div>
            <div className="div6C">
              <img
                src={social}
                srcSet={`${social2} 2x, ${social3} 3x`}
                className="Social-media-icons"
              />
            </div>
          </div>

          <div className="div7C">
            <span className="Tell-us-more-about-yourselfC">
              Tell us more about yourself
            </span>
            <div className="div20C">
              <div className="div13C">
                <div className="div14C">
                  <span className="Fist-nameC">First name</span>
                  <div className="Rectangle-24148C"></div>
                </div>
                <div className="div19C">
                  <span className="Last-nameC">Last name</span>
                  <div className="Rectangle-24153C"></div>
                </div>
              </div>

              <div className="div15C">
                <span className="Email-addressC">Email address</span>
                <div className="Rectangle-24150C"></div>
              </div>

              <div className="div16C">
                <span className="MessageC">Message</span>
                <div className="Path-162308C"></div>
              </div>

              <div className="Rectangle-24977C">
                <span className="Get-in-TouchC">Get in Touch</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="Path-162316C"></div>
          <div className='div40C'>
          <img
            src={areeba}
            srcSet={`${areeba2} 2x, ${areeba3} 3x`}
            className="AreebaC"
          ></img>
          <img
            src={master}
            srcSet={`${master2} 2x, ${master3} 3x`}
            className="MastercardC"
          ></img>
 
          <span className="Privacy-PolicyC">Privacy Policy</span>
          <span className="Terms-of-ServiceC">Terms of Service</span>
          <span className="Cookie-PolicyC">Cookie Policy</span>
          <span className="-Bex-All-Rights-Reserved">
            2021 Bex. All Rights Reserved.
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
const ConnectComponentRedux = connector(ConnectComponent);

export { ConnectComponentRedux as ConnectComponent };
