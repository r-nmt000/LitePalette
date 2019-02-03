import React from 'react';
import { View } from 'react-native';
import { ListItem } from 'react-native-elements'

const list = [
  {
    name: 'Misaki Dekura',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  {
    name: 'Ryusuke Nomoto',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  }
];

export default class NotesInDeck extends React.Component {
  render() {
    return (
      <View>
        {
          list.map((l, i) => (
            <ListItem
              key={i}
              leftAvatar={{ source: { uri: l.avatar_url } }}
              title={l.name}
              subtitle={l.subtitle}
              onPress={() => this.props.navigation.navigate('SingleNote')}
            />
          ))
        }
      </View>
    );
  }
}
