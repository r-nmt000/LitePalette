import React from 'react';
import { Text, View } from 'react-native';


export default class DetailScreen extends React.Component {
  render() {
    return (
      <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>詳細ページ</Text>
      </View>
    );
  }
}
