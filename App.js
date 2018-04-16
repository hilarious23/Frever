import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import FriendListScreen from './src/screens/FriendListScreen';
import Appbar from './src/components/Appbar';
import CircleButton from './src/elements/CircleButton';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FriendListScreen />
        
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
