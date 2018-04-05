import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Appbar from './src/components/Appbar';
import FriendList from './src/components/FriendList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Appbar />
        <FriendList />

        <View style={styles.friendAddButton}>
          <Text style={styles.friendAddButtonTitle}>+</Text>
        </View>

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

  friendAddButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: '#ea5e12',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  friendAddButtonTitle: {
    fontSize: 32,
    lineHeight: 36,
    color: '#fff'
  },

});
