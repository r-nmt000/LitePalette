import React from 'react';
import { createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import AppNavigator from './src/navigation/AppNavigator'


const AppContainer = createAppContainer(AppNavigator);
const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

