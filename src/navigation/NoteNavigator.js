import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation';
import NoteEditor from '../components/NoteEditor'
import NotePreviewer from '../components/NotePreviewer'

const NoteNavigator = createMaterialTopTabNavigator(
  {
    EditorTab: NoteEditor,
    PreviewTab: NotePreviewer,
  },
  {
    initialRouteName: 'EditorTab',
    swipeEnabled: true,
    tabBarOptions: {
      // tabStyle: {
      //   backgroundColor: 'white',
      //   color: '#000000',
      // },
      style: {
        backgroundColor: 'white',
        height: 40,
      },
      labelStyle: {
        color: 'black',
      }
    },
  },
);

export default NoteNavigator;
