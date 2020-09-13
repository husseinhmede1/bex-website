# React Redux TypeScript Template

## Description

This is a React.js template fully written in Typescript. The template is based on [Redux](https://redux.js.org/) for global state management, following the "features" or "ducks" pattern. This pattern enforces that all files for a feature are the same folder, and that all Redux logic for a feature in a single file. As a result, the template ommits the old component-container pattern resulting in smaller chunks of code, significantly less file count, easier debugging and limited use of parent-child props.

## Commands

|       command               |                    action                                  |
| :-------------------------: | :--------------------------------------------------------: |
|     `yarn install`          |    Downloads project dependencies                          |
|     `yarn start`            |    Runs the app in the development mode                    |
|     `yarn test`             |    Launches the test runner in the interactive watch mode  |
|     `yarn build`            |    Builds the app for production to the build folder       |
|     `yarn serve`            |    Starts a static server to serve production build        |
|     `yarn yarn package-win` |    Starts a static server to serve production build        |
|     `yarn cli:install`      |    Downloads the interactive cli dependencies              |
|     `yarn cli:create`       |    Generate template file/s using the cli tool             |

## To Use Template

* Change the current working directory to your local project (optional).
* Go to your project's root directory.
* Run `git remote set-url origin <your new project url>` to link remote project (if applies).
* Inside [`package.json`](package.json), modify the folowing project settings:
    * Set `"name": <your new project name>`
    * Set `"description": <your new project description>` 
* Inside [`public/electron.js`](public/electron.js), set `title: <your project window title>`
* Run `yarn install` to install the dependencies.
* Run `yarn start` to start development server.
* Run `yarn cli:install` to install cli dependencies.
* Run `yarn cli:create` to generate feature files or styled components.
* Edit generated files (read about generated files [here](##structure))
* To generate production build files, run `yarn build`

## Production
* Web:
    * run `yarn build` to perform production build
    * run `yarn serve` to serve production build locally
* Windows:
    * run `yarn global add windows-build-tools` to install windows build tools
    * run `yarn global add grpc --build-from-source`
    * run `yarn electron-pack` to package as desktop app

## Structure

The project root directory structure is as follows:

```
  '|-- <root>',
  '    |-- build',
  '    |-- cli',
  '    |-- public',
  '    |-- src',
  '        |-- assets',
  '        |-- config',
  '        |-- features',
  '        |   |-- demo',
  '        |       |-- home',
  '        |       |-- landing',
  '        |       |-- login',
  '        |-- route',
  '        |-- store',
  '        |-- styled',
  ''
```
As mentioned before, following the "features" or "ducks" pattern organizes the folders in the followinf manner: 

* [`/build`](build)         for production build files
* [`/cli`](cli)         for the interactive cli that generates project template files.
* [`/public`](public)         for public files
* [`/src`](src)            for all source files
* [`src/assets`](src/assets)      for assets (.png, .svg, etc ...)
* [`src/config`](src/config)      for configuration files (colors, headers, strings, etc ...)
* [`src/features`](src/features)    for project features (login, register, dashboard, settings ...)
* [`src/roure`](src/roure)       for router middlewares (protectedRoutes ...)
* [`src/store`](src/store)       for redux configurations (combineReducers, middlewares, persist etc ...)
* [`src/styled`](src/styled)      for multiple use stateless styled components 

The content of [`feature`](src/features) and [`styled`](src/styled) folders is further explored here: 

#### features

As opposed to dividing files into `containers` for logic and `components` for presentation then putting redux logic in a separate folder, this template couples logic, presentation and redux state for each feature separately. Thus, redux state is divided into "slices" where each slice is coupled with a feature. The template also imposes not using directly passed props with connected components.

For example, a login feature contains a slice of the redux state to manage credentials and session, and a component for presenting and submitting the form. 

Example

```tsx
// login.slice.tsx
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { Login } from "./login.type";

/**
 * Initial state object
 */
const initialState: Login = {
  email: "",
  isLoggedIn: false,
};

/**
 * Thunks are used to dispatch actions that return functions rather than objects,
 * usually used for making api calls or dispatching async actions.
 * Thunks are dispatched in the same way regular actions are dispatched.
 * A slice can have multiple thunks
 */
const makeLoginApiCall = createAsyncThunk(
  // TODO change this method based on usecase
  // You can add as many thunks as required
  // Delete this method if not needed
  "login/makeLoginApiCallStatus",
  async (body: any, thunkApi) => {
    // Make your API call here
    return {};
  }
);

/**
 * Feature slice Object
 * Automatically generates actions as per reducers
 */
const loginSlice = createSlice({
  /**
   * Unique feature name
   */
  name: "login",

  /**
   * Initial state object
   */
  initialState: initialState,

  /**
   * Reducers are functions that determine changes to an application's state.
   * They can have two forms:
   *
   * 1- Modify the state by providing key-value pairs, ex:
   *
   *    setCounter: (state, action) => {
   *      return { ...state, ...action.payload };
   *    }
   *
   * 2- Apply mutating logic to part of the state.
   *    Note that this is possible using 'Immer', ex:
   *
   *    decrementCounter: (state) => {
   *      state.value -= 1;
   *    }
   */
  reducers: {
    setLogin: (state, action) => {
      return { ...state, ...action.payload };
    },
    reset: () => initialState,
    // Add here reducers
    // ...
  },
  /**
   * Extra reducers are for handling action types.
   * Here thunk actions are handled
   */
  extraReducers: (builder) => {
    // TODO remove extraReducers if there are no thunks
    builder
      .addCase(makeLoginApiCall.pending, (state, action) => {
        // Write pending logic here
      })
      .addCase(makeLoginApiCall.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.email = action.payload;
      })
      .addCase(makeLoginApiCall.rejected, (state, action) => {
        // Write failure logic here
        state.isLoggedIn = false;
      });
  },
});

/**
 * Reducers are exported so they could be added to store
 */
export const loginReducer = loginSlice.reducer;

/**
 * Actions hold the same names as reducers.
 * Actions can be dispached using 'useDispacth' hook,
 * or by 'mapDispatchToProps' in the redux 'connect' function
 */
export const loginActions = { ...loginSlice.actions, makeLoginApiCall };

```

```tsx
// login.component.tsx
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
  const { logIn, isLoggedIn, push, previousLocations } = props;
  /**
   * useEffect perfeorms side-effects on component rendering.
   * It takes a function for side-effects and a dependency list.
   * When dependency list is empty, useEffect runs each time the component rerenders
   * Adding variables to the dependency list will cause useEffect to run each time a variable changes
   */
  useEffect(() => {
    // Write your side-effects here
    if (isLoggedIn) {
      if (previousLocations.length > 1)
        push(previousLocations[previousLocations.length - 1].location.pathname);
      else push("/home");
    }
  }, [isLoggedIn, previousLocations, previousLocations.length, push]);

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

            <a href="/">Forgot password</a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Log in
            </Button>
            Or <a href="/register">register now!</a>
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
  previousLocations: state.router.previousLocations,
});

/**
 * Maps actions from slices to props
 */
const mapDispatchToProps = {
  // map your actions here 
  logIn: loginActions.makeLoginApiCall,
  push: push,
};

/**
 * Connects component to redux store
 */
const connector = connect(mapStateToProps, mapDispatchToProps);
const LoginComponentRedux = connector(LoginComponent);

export { LoginComponentRedux as LoginComponent };

```

#### cli

The command line tool is used to generating styled components and features.

Example

![Drag Racing](./readme/cli.PNG)

Notice that the `path` option enables nested styled component or nested features. For example, form styled components may all be under the same folder in styled.


## Features

- [Typescript](https://www.typescriptlang.org/) for scalability, code clarity, ease of debugging, etc ... 
- [redux-toolkit](https://redux-toolkit.js.org/) toolset for efficient Redux development
- [redux-persist](https://github.com/rt2zz/redux-persist) to persist and rehydrate Redux store
- [react-router-dom](https://reactrouter.com/web/guides/quick-start) for routing, with [redux-first-history](https://github.com/salvoravida/redux-first-history) middleware
- [ant-design](https://ant.design/) for responsive high quality reusable components and forms
- fully functional components
- cli tool to generate template files that follow project pattern.
- path aliases to reduce import statements' length 

## Note: Demo Files:

To remove demo files:

1. Delete `demo` folder from [`features`](src/features) folder
2. Remove related reducers in the `combineReducers` function in [`rootReducer.ts`](src/store/rootReducer.ts)
3. Remove routes that use demo components in [`App.tsx`](src/App.tsx)
4. Verify that [`App.tsx`](src/App.tsx) does not use demo reducers in connect.


