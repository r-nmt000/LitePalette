import React from 'react';
import { StyleSheet, View } from 'react-native'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

export default class NewNoteButton extends React.Component {
  render() {
    return (
      <ActionButton
        buttonColor="#DBB34D"
        style={styles.actionButton}>
        <ActionButton.Item buttonColor='white' title="New note" onPress={() => console.log("notes tapped!")}>
          <Icon name="md-create" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor='white' title="Study deck" onPress={() => {}}>
          <Icon name="md-play" style={styles.actionButtonIcon} />
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
    color: '#DBB34D',
  },
});
