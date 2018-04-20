import React from 'react';
import { StyleSheet, View } from 'react-native';
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
      .get()
      .then((snapshot) => {
        const friendList = [];
        snapshot.forEach((doc) => {
          friendList.push(doc.data());
        })
        this.setState({ friendList: friendList });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  handlePress() {
    this.props.navigation.navigate('NewFriend');
  }

  render() {
    return (
      <View style={styles.container}>
        <FriendList friendList={this.state.friendList} navigation={this.props.navigation} />
        <CircleButton onPress={this.handlePress.bind(this)}>
          { "user-plus" }
        </CircleButton>
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
});

export default FriendListScreen;
