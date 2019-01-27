import React from 'react';
import { Text, View, Button } from 'react-native';


export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>ホームページ</Text>
        <Button
          title="詳細ページへ"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>    );
  }
}
