import React from "react";
import {createDrawerNavigator, DrawerItems} from "react-navigation-drawer";
import { Icon } from 'react-native-elements';

import AllDecks  from '../components/AllDecks'
import { View, Image, Dimensions } from "react-native";
import DeckNavigator from "./DeckNavigator";

const SCREEN_WIDTH = Dimensions.get('window').width;

const CustomDrawerContentComponent = props => (
  <View style={{ flex: 1, backgroundColor: '#43484d' }}>
    <View
      style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}
    >
      <Image
        source={require('../images/logo.png')}
        style={{ width: SCREEN_WIDTH * 0.57 }}
        resizeMode="contain"
      />
    </View>
    <View style={{ marginLeft: 10 }}>
      <DrawerItems {...props} />
    </View>
  </View>
);

const AppNavigator = createDrawerNavigator(
  {
    AllDecksDrawerItem: {
      screen: DeckNavigator,
    },
    // Decks: {
    // },
    // Tags: {
    // },
    // Synchronize: {
    // },
    // Preference: {
    // },
    // Logout: {
    // },
  },
  {
    initialRouteName: 'AllDecksDrawerItem',
    contentOptions: {
      activeTintColor: '#548ff7',
      activeBackgroundColor: 'transparent',
      inactiveTintColor: '#ffffff',
      inactiveBackgroundColor: 'transparent',
      labelStyle: {
        fontSize: 15,
        marginLeft: 0,
      },
    },
    drawerWidth: SCREEN_WIDTH * 0.8,
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  }
);

export default AppNavigator;