import React from 'react';
import { StyleSheet, View } from 'react-native'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default class NewDeckButton extends React.Component {
  render() {
    return (
      <ActionButton buttonColor="rgba(231,76,60,1)" style={styles.actionButton}>
       <ActionButton.Item buttonColor='#9b59b6' title="CSV import" onPress={() => console.log("notes tapped!")}>
         <Icon name="md-download" style={styles.actionButtonIcon} />
       </ActionButton.Item>
       <ActionButton.Item buttonColor='#3498db' title="New deck" onPress={() => {}}>
         <Icon name="md-create" style={styles.actionButtonIcon} />
       </ActionButton.Item>
      </ActionButton>
    )
  }

}
const styles = StyleSheet.create({
  actionButton: {
    position: 'absolute',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
