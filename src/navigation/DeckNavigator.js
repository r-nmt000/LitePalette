import React from "react";
import { createStackNavigator, DrawerActions } from "react-navigation";
import { Icon } from 'react-native-elements';

import AllDecks  from '../components/AllDecks'
import SingleNote from '../components/SingleNote'
import NotesInDeck from "../components/NotesInDeck";

const DeckNavigator = createStackNavigator(
  {
    AllDecksStack: {
      screen: AllDecks,
      navigationOptions: ({ navigation }) => ({
        title: 'All decks',
        headerLeft: (
          <Icon
            name="menu"
            size={30}
            type="entypo"
            containerStyle={{ marginLeft: 10 }}
            // onPress={() => navigation.navigate('DrawerOpen')}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          />
        ),
      }),
    },
    NotesInDeckStack: {
      screen: NotesInDeck,
    },
    SingleNoteStack: {
      screen: SingleNote,
    },
  },
  {
    initialRouteName: 'AllDecksStack',
  }
);

export default DeckNavigator;
