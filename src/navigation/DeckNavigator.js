import React from "react";
import { createStackNavigator, DrawerActions } from "react-navigation";
import { Icon } from 'react-native-elements';

import AllDecks  from '../components/AllDecks'
import NotesInDeck from "../components/NotesInDeck";
import NoteNavigator from "./NoteNavigator";

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
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          />
        ),
      }),
    },
    NotesInDeckStack: {
      screen: NotesInDeck,
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.deckName,
      }),
    },
    NoteStack: {
      screen: NoteNavigator,
    },
  },
  {
    initialRouteName: 'AllDecksStack',
  }
);

export default DeckNavigator;
