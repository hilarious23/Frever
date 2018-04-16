import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Appbar from '../components/Appbar';
import CircleButton from '../elements/CircleButton';

class FriendDetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar />
        <View style={styles.FriendHeader}>
            <Text style={styles.FriendHeaderTitle}>hi</Text>
            <Text style={styles.FriendHeaderDate}>2017/12/12</Text>
        </View>

        <View style={styles.FriendContent}>
          <Text>
            shun
          </Text>
        </View>
        <View style={styles.editButton}>
        <CircleButton >
          { "pencil" }
        </CircleButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    
  },
  FriendHeader: {
    height: 140,
    backgroundColor: '#17313C',
    justifyContent: 'center',
    padding: 10,
  },
  FriendHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  FriendHeaderDate: {
    fontSize: 12,
    color: '#fff',
  },
  FriendContent: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
    zIndex: 0,
  },
  editButton: {
    top:480,
    zIndex: 100
  },
});

export default FriendDetailScreen;
