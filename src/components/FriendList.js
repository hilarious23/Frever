import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class FriendList extends React.Component {
  render() {
    return (
      <View style={styles.friendList}>
        <View style={styles.friendListItem}>
          <Text style={styles.friendName}>石川駿</Text>
          <Text style={styles.friendDate}>2017/10/10</Text>
        </View>

        <View style={styles.friendListItem}>
          <Text style={styles.friendName}>石川駿</Text>
          <Text style={styles.friendDate}>2017/10/10</Text>
        </View>

        <View style={styles.friendListItem}>
          <Text style={styles.friendName}>石川駿</Text>
          <Text style={styles.friendDate}>2017/10/10</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  friendList: {
    width: '100%',
    flex: 1,
    
  },
  friendListItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  friendName: {
    fontSize: 18,
    marginBottom: 4,
  },
  friendDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },
});

export default FriendList;
