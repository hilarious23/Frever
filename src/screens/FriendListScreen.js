import React from 'react';
import { StyleSheet, View } from 'react-native';

import FriendList from '../components/FriendList';
import CircleButton from '../elements/CircleButton';


class FriendListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
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
