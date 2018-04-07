import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CircleButton from '../elements/CircleButton';

class FriendDetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.FriendHeader}>
            <Text style={styles.FriendHeaderTitle}>hi</Text>
            <Text style={styles.FriendHeaderDate}>2017/12/12</Text>
          </View>
        </View>

        <View style={styles.FriendContent}>
          <Text>
            Hi
          </Text>
        </View>

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
  FriendHeader: {
    height: 200,
    backgroundColor: '#17313C',
  },
  FriendHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  FriendHeaderDate: {
    fontSize: 12,
    color: '#fff',
  },
});

export default FriendDetailScreen;
