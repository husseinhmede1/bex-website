import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Input, Button, Form, Card, Checkbox, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { push } from "redux-first-history";

import { RootState } from "&store/store";
/**
 * These are actions imported from the feature slices.
 * You can use 'useDispatch' hook or 'mapDispatchToProps'
 * to dispatch these actions
 */
import { loginActions } from "./login.slice";

type ReduxProps = ConnectedProps<typeof connector>;

const LoginComponent = (props: ReduxProps) => {
  const { logIn, isLoggedIn, push } = props;
  /**
   * useEffect perfeorms side-effects on component rendering.
   * It takes a function for side-effects and a dependency list.
   * When dependency list is empty, useEffect runs each time the component rerenders
   * Adding variables to the dependency list will cause useEffect to run each time a variable changes
   */
  useEffect(() => {
    // Write your side-effects here
    if (isLoggedIn) {
      push("/home");
    }
  }, [isLoggedIn, push]);

  const handleLoginFormSubmit = (values: any) => {
    logIn(values);
  };

  return (
    <Col xs={24} sm={24} md={18} lg={8} xl={8}>
      <Card bordered={false}>
        <h1>Login Page</h1>
        <Form
          name="normal_login"
          initialValues={{ remember: true }}
          onFinish={handleLoginFormSubmit}
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Please input your Password!" },
              {
                min: 8,
                message: "Password should be at least 8 character long!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a href="#/">Forgot password</a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Log in
            </Button>
            Or <a href="#/register">register now!</a>
          </Form.Item>
        </Form>
      </Card>
    </Col>
  );
};

/**
 * Maps state variables from redux store to props of currect component
 * @param state
 */
const mapStateToProps = (state: RootState) => ({
  // Map your redux state to your props here
  isLoggedIn: state.login.isLoggedIn,
});

/**
 * Maps actions from slices to props
 */
const mapDispatchToProps = {
  // map your actions here ex:
  // increment : counterActions.increment
  logIn: loginActions.makeLoginApiCall,
  push,
};

/**
 * Connects component to redux store
 */
const connector = connect(mapStateToProps, mapDispatchToProps);
const LoginComponentRedux = connector(LoginComponent);

export { LoginComponentRedux as LoginComponent };
