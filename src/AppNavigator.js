import React from "react";
import { createStackNavigator } from "react-navigation";
import { Icon } from 'react-native-elements';

import AllDecks  from './components/AllDecks'
import SingleNote from './components/SingleNote'
import NotesInDeck from "./components/NotesInDeck";

const AppNavigator = createStackNavigator(
  {
    AllDecks: {
      screen: AllDecks,
      navigationOptions: ({ navigation }) => ({
        title: 'Decks',
        headerLeft: (
          <Icon
            name="menu"
            size={30}
            type="entypo"
            containerStyle={{ marginLeft: 10 }}
            onPress={() => navigation.navigate('DrawerOpen')}
          />
        ),
      }),
    },
    NotesInDeck: {
      screen: NotesInDeck,
    },
    SingleNote: {
      screen: SingleNote,
    },
  },
  {
    initialRouteName: 'AllDecks',
  }
);

export default AppNavigator;