import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import FriendEditScreen from './src/screens/FriendEditScreen';
import CircleButton from './src/elements/CircleButton';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FriendEditScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
