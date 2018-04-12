import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import FriendDetailScreen from './src/screens/FriendDetailScreen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FriendDetailScreen />
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
