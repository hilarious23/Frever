import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Appbar from '../components/Appbar';
import CircleButton from '../elements/CircleButton';

class FriendDetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar />
        <View>
          <View style={styles.FriendHeader}>
            <View>
              <Text style={styles.FriendHeaderTitle}>hi</Text>
              <Text style={styles.FriendHeaderDate}>2017/12/12</Text>
            </View>
          </View>
        </View>

        <View style={styles.FriendContent}>
          <Text>
            Moe Aoki
          </Text>
        </View>

        <CircleButton style={styles.editBotton}>+</CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet
.create({
  container: {
    flex: 1,
    width: '100%',
    top: 80,
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
    flex: 1,
  },
  editBotton: {
    top:120,
  },
});

export default FriendDetailScreen;
