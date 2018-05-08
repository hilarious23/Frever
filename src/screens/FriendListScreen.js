import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import firebase from 'firebase';

import FriendList from '../components/FriendList';
import CircleButton from '../elements/CircleButton';


class FriendListScreen extends React.Component {
  state = {
    friendList: [],
  }

  componentWillMount() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    db.collection(`users/${currentUser.uid}/friends`)
      .orderBy('createdOn', 'desc')
      .onSnapshot((snapshot) => {
        const friendList = [];
        snapshot.forEach((doc) => {
          friendList.push({ ...doc.data(), key: doc.id });
        });
        this.setState({ friendList: friendList });
      });
      /*
      .get()
      .then((snapshot) => {
        const friendList = [];
        snapshot.forEach((doc) => {
          friendList.push({ ...doc.data(), key: doc.id });
        });
        this.setState({ friendList: friendList });
      })
      .catch((error) => {
        console.log(error);
      })
      */
  }

  handlePress() {
    this.props.navigation.navigate('NewFriend');
  }

  handleClick() {
    this.props.navigation.navigate('FavFriend');
  }

  render() {
    return (
      <View style={styles.container}>
        <FriendList friendList={this.state.friendList} navigation={this.props.navigation} />

        <CircleButton
          onPress={this.handlePress.bind(this)}>
          { "user-plus" }
        </CircleButton>

        <TouchableOpacity
          style={styles.favStar}
          onPress={this.handleClick.bind(this)}>
          <Text style={styles.favStarText}>FavFriends</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      width: '100%',
      flexDirection: 'column',
      backgroundColor: '#FFFDF6',
  },
  favStar: {
    top: -692,
    left: 240,
    backgroundColor: '#4eacd8',
    width: 64,
    height: 24,
    margin: 8,
  },
  favStarText: {
    color: '#fff',
  },
});

export default FriendListScreen;
