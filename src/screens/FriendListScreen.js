import React from 'react';
import { StyleSheet, View } from 'react-native';

import Appbar from '../components/Appbar';
import FriendList from '../components/FriendList';
import CircleButton from '../elements/CircleButton';


class FriendListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar />
        <FriendList />
        <CircleButton>+</CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      width: '100%',
  },
});

export default FriendListScreen;
