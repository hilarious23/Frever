import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import firebase from 'firebase';

import FriendList from '../components/FriendList';
import CircleButton from '../elements/CircleButton';
import { NavigationActions } from 'react-navigation';


class FavoriteFriendScreen extends React.Component {
  state = {
    friendList: [],
  }

  componentWillMount() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    db.collection(`users/${currentUser.uid}/friends`)
      .orderBy('fav')
      .where('fav','>',0)
      .orderBy('createdOn', 'desc')
      .onSnapshot((snapshot) => {
        const friendList = [];
        snapshot.forEach((doc) => {
          friendList.push({ ...doc.data(), key: doc.id });
        });
        this.setState({ friendList: friendList });
      });
  }

  handlePress() {
    this.props.navigation.navigate('NewFriend');
  }

  handleClick() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  }


  render() {
    return (
      <View style={styles.container}>
        <FriendList friendList={this.state.friendList} navigation={this.props.navigation} />
        <CircleButton onPress={this.handlePress.bind(this)}>
          { "user-plus" }
        </CircleButton>

        <TouchableOpacity
          style={styles.favStar}
          onPress={this.handleClick.bind(this)}>
          <Text style={styles.favStarText}>Go to List</Text>
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
    left: 272,
    backgroundColor: '#4eacd8',
    width: 96,
    height: 24,
    margin: 8,
  },
  favStarText: {
    color: '#fff',
    alignSelf: 'center'
  },
});

export default FavoriteFriendScreen;
