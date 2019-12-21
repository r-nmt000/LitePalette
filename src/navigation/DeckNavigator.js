import React from "react";
import { DrawerActions } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";
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
        headerStyle: {
          backgroundColor: '#F9F9F9',
          elevation: 0,
        },
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
        headerStyle: {
          backgroundColor: '#F9F9F9',
          elevation: 0,
        },
      }),
    },
    NoteStack: {
      screen: NoteNavigator,
      navigationOptions: ({ navigation }) => ({
        title: 'Note',
        headerStyle: {
          backgroundColor: '#F9F9F9',
          elevation: 0,
        },
      }),
    },
  },
  {
    initialRouteName: 'AllDecksStack',
  }
);

export default DeckNavigator;
