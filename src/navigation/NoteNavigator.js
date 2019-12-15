import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import NoteEditor from '../components/note/NoteEditor'
import NotePreviewer from '../components/note/NotePreviewer'

const NoteNavigator = createMaterialTopTabNavigator(
  {
    EditorTab: {
      screen: NoteEditor,
      navigationOptions: () => ({
        title: 'Editor',
      }),
    },
    PreviewTab: {
      screen: NotePreviewer,
      navigationOptions: () => ({
        title: 'Preview',
      }),
    },
  },
  {
    initialRouteName: 'EditorTab',
    swipeEnabled: true,
    tabBarOptions: {
      style: {
        backgroundColor: 'white',
        height: 40,
      },
      labelStyle: {
        color: 'black',
      },
      upperCaseLabel: false,
    },
  },
);

export default NoteNavigator;
