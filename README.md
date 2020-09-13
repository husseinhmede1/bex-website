# React Redux TypeScript Template

## Description

This is a 

## Commands

|       command        |                    action                     |
| :------------------: | :-------------------------------------------: |
|        `yarn`        |           Download the dependencies           |
|     `yarn start`     |               Start the bundler               |
|    `yarn android`    | Run a debugging version of the app on android |
| `yarn android:clean` |           Clean the android project           |
| `yarn android:build` |             Creates a release apk             |
|      `yarn ios`      |   Run a debugging version of the app on iOS   |
|     `yarn lint`      |               Analyse the code                |
|     `cli:install`    |         Download the cli dependencies         |
|     `cli:create`     |        Create a file using the cli tool       |

## How to run

* At root directory run `npm install` or `yarn install` to install the dependencies.
* Add `local.properties` file to your `android\app` directory with your android SDK directory.
  Ex: sdk.dir = `Your SDK Location`
  Or add the SDK directory to a system environment variable ANDROID_HOME.

#### Android

* At root directory run `npm install` or `yarn install` to install the dependencies.
* Add `local.properties` file to your `android\app` directory with your android SDK directory.
  Ex: sdk.dir = `Your SDK Location`
  Or add the SDK directory to a system environment variable ANDROID_HOME.

#### iOS

* Run `cd ios/ && pod install`.
* Then run `react-native run-ios` to run the project on iOS devices or run through Xcode.

## Structure

#### components

- In this folder we put the components as a view, the UI that the end user will see, it inheret its properties from its container, so static values are not allow.

Example

```js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  /** A text to be displayed in the center of this component */
  title?: string;

  characterName?: string;
}

const ApiExampleComponent = (props: Props) => {
  const { characterName } = props;
  return (
    <View style={styles.conatiner}>
      <Text>{characterName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export { ApiExampleComponent };
```

#### containers

- Containers are the controllers of the components, in the containers we make the api calls, manage the state, and the logic of the interaction (button press, guesture movement, ...).

Example

```js
import React, { useEffect, useState } from 'react';

import { ApiExampleComponent } from '&components/tabs/apiExample.component';
import { getStarWarsCharacter } from '&api/starWars';

const ApiExampleContainer = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [sent, setSent] = useState<boolean>(false);
  const [response, setRespone] = useState<any>();

  const apiCall = async () => {
    if (sent) {
      return;
    }
    setSent(true);
    const res = await getStarWarsCharacter(1);
    setRespone(res);
    setLoading(false);
  };

  useEffect(() => {
    apiCall();
  }, []);

  return isLoading ? null : (
    <ApiExampleComponent title="ApiExampleContainer" characterName={response.name} />
  );
};

export { ApiExampleContainer };

```

#### components/Styled

- Styled is the place where the repetitve components lives, when making a styled component make it as generic as possible so that it can be used in multiple screns.

Example

```js
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

interface Props {
  /** A text to be displayed in the center of this component */
  title: string;

  /** A text to be displayed on the Button */
  buttonTitle: string;

  /* adding '?' means this property is optional, and we'll handle the default behaviour */
  /** A function to be exectued when the button is pressed */
  buttonHandler?: () => void;
}

const CutsomButton = (props: Props) => {
  const { title, buttonHandler, buttonTitle } = props;

  /* If buttonHander is undefined use the default behaviour */
  const onPressButton =
    buttonHandler ||
    (() => {
      console.log(`pressed the ${buttonTitle} `);
    });

  return (
    <View style={styles.conatiner}>
      <Text>{title}</Text>
      <Button title={buttonTitle} onPress={() => onPressButton()} />
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});

export { CutsomButton };

```

#### api

- The folder that holds the api calles in details, we write the logic of the api call and export a simple function to be called easily in the container.

Example

```js
import Axois from 'axios';

const getStarWarsCharacter = async (id: number) => {
  let result;
  try {
    result = await Axois.get(`https://swapi.dev/api/people/${id}/`);
  } catch (error) {
    result = {
      data: {
        error: 'Failed',
      },
    };
  }

  return result.data;
};

export { getStarWarsCharacter };
```

#### redux

- We'll use redux as a global state managment, if you feel a state should be shared with multiple screens or components then save the state in redux, e.g: sharing the username with other screens.

Example

dispatch (set state)

```js
import { useDispatch } from 'react-redux';
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUsername(loadData('username')));
  }, [dispatch]);
.
.
.
```
useSelector (get state)

```js
import { useSelector } from 'react-redux';

const HomeContainer = () => {
  const { username } = useSelector((state: any) => state.kyc);
.
.
.

```

#### redux/actions

- Actions are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using store. dispatch().
Example

```js
import { KYC } from '../constants';

const setUsername = (username: string) => {
  return {
    type: KYC.SET_USERNAME,
    payload: username,
  };
};

export { setUsername };

```

#### redux/reducers

- Reducers specify how the application's state changes in response to action. The reducer is a function that takes the previous state and an action.
Example

```js
import { KYC } from '../constants';

const initialState = {
  username: '',
  password: '',
};

const KycReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case KYC.SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    default:
      return state;
  }
};

export { KycReducer };
```

#### redux/constants

- We define all the constancts (type of action) for consistency.
Example

```js
export const SET_USERNAME = 'SET_USERNAME';
export const SET_PASSWORD = 'SET_PASSWORD';
```

#### realm

- Realm is used for local storage
Example

Store Data:

```js
import React, { useState } from 'react';

import { OnboardingComponent } from '&app/components/onboarding/onboarding.component';
import { storeData } from '&realm';

const OnboardingContainer = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const storeCredentials = () => {
    storeData({ username });
    storeData({ password });
  };

  return (
    <OnboardingComponent
      buttonHandler={() => {
        storeCredentials();
      }}
      buttonTitle="Click me!"
      onUsernameChange={(text) => setUsername(text)}
      onPasswordChange={(text) => setPassword(text)}
    />
  );
};

export { OnboardingContainer };
```

Load Data
  

```js
import { isEmpty, loadData } from '&realm';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isEmpty()) {
      dispatch(setUsername(loadData('username')));
    }
  }, [dispatch]);
  .
  .
  .
  .
```


#### utils

- Helper functions that might be useful for multiple files/containers, such as concatination of 2 json objects, hashing function, ...

#### config

- global projects configuration that will be used throught out the project, such as colors and strings.

#### cli

- command line tool for generating styled component, component container, and containers.
- run `yarn cli:install` to download the cli dependencies then `yarn cli:create` to start the interactive cli.

## Features

- redux global state managment
- realm local storage
- cli tool for files generation
- path alias
- using typescirpt instead of javascript

## Suggestions

#### List of VS-Code extenstions

- Bable JavaScript
- DotENV
- ESLint
- Flow Language Support
- Git Blame
- GitLense - Get supercharged
- JavaScript (ES6) code snippets
- npm
- npm Intellisense
- Path intellisense
- Pritter - Code formatter
- Visual Studio intelliCode
- yarn
- Todo Tree
- Better comments


#### List of Learing Resources

- [typescirpt clean code](https://github.com/labs42io/clean-code-typescript)
- [Learn React native](https://youtu.be/Hf4MJH0jDb4)

