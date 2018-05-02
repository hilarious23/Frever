import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, FlatList } from 'react-native';

const dateString = (date) => {
  const str = date.toISOString();
  return str.split('T')[0];
}

class FriendList extends React.Component {
  renderFriend({ item }) {
    return(
      <TouchableHighlight onPress={() => {this.props.navigation.navigate('FriendDetail', {friend: item}); }}>
        <View style={styles.friendListItem}>
          <Text style={styles.friendName}>{item.name}</Text>
          <Text style={styles.friendDate}>{dateString(item.createdOn)}</Text>
        </View>
      </TouchableHighlight>
    );
  }
  render() {
    return (
      <View style={styles.friendList}>
        <FlatList data={this.props.friendList} renderItem={this.renderFriend.bind(this)} />
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
