import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { useTranslation } from "react-i18next";
import { RootState } from "&store/store";
import styled from 'styled-components';

import try1 from "&assets/img/Try-BEX-img.png";
import try2 from "&assets/img/Try-BEX-img@2x.png";
import try3 from "&assets/img/Try-BEX-img@3x.png";

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

const CookieComponent = (props: ReduxProps) => {
  const { logout } = props;
  const { t } = useTranslation(["Cookie"]);

  /**
   * useEffect performs side-effects on component rendering.
   * It takes a function for side-effects and a dependency list.
   * When dependency list is empty, useEffect runs each time the component rerenders
   * Adding variables to the dependency list will cause useEffect to run each time a variable changes
   */
  useEffect(() => {
    // Write your side-effects here
  }, []);


  const Box = styled.div`
  margin: 40px;
  border: 5px black;
`;

const Content = styled.p`
  font-size: 16px;
  text-align: center;
`;


  return (<>
    <Box>
    <Content> Styling React Components </Content>
  </Box>
  </>);
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
const CookieComponentRedux = connector(CookieComponent);

export { CookieComponentRedux as CookieComponent };
