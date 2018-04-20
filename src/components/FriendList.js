import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, FlatList } from 'react-native';

class FriendList extends React.Component {
  renderFriend({ item }) {
    return(
      <TouchableHighlight onPress={() => {this.props.navigation.navigate('FriendDetail'); }}>
        <View style={styles.friendListItem}>
          <Text style={styles.friendName}>{item.body}</Text>
          <Text style={styles.friendDate}>2017/10/10</Text>
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
