import React from "react";
import { createStackNavigator } from "react-navigation";

import AllDecks  from './components/AllDecks'
import SingleNote from './components/SingleNote'
import NotesInDeck from "./components/NotesInDeck";

const AppNavigator = createStackNavigator(
  {
    AllDecks: {
      screen: AllDecks,
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