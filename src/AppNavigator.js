import React from "react";
import { createStackNavigator } from "react-navigation";

import HomeScreen  from './components/AllNotes'
import DetailScreen from './components/SingleNote'

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailScreen,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default AppNavigator;