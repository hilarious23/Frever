import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../elements/CircleButton';

const dateString = (date) => {
  const str = date.toISOString();
  return str.split('T')[0];
}


class FriendDetailScreen extends React.Component {
  state = {
    friend: {},
    key: '',
    fav: '',
  }

  componentWillMount() {
    const { params } = this.props.navigation.state;
    this.setState({
      friend: params.friend,
      key: params.friend.key,
      fav: params.friend.fav,
     });
  }


  returnFriend(friend) {
    this.setState({ friend: friend });
  }

  handlePress() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    db.collection(`users/${currentUser.uid}/friends`).doc(this.state.key).delete()
      .then(() => {
        console.log('Deleted');
        this.props.navigation.goBack();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleClick() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const newDate = new Date();
    db.collection(`users/${currentUser.uid}/friends`).doc(this.state.key)
      .update({
        /*
        Fav() {
          if (fav === 1) {
          return fav: 0;
        } else {
          return fav: 1;
        }
        */
        fav: 0
      })
      .catch((error) => {
        console.log('error');
      });
  }

  render() {
    const { friend } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.FriendHeader}>
          <Text style={styles.FriendHeaderTitle}>{friend.name}</Text>
          <Text style={styles.FriendHeaderUrl}>{friend.url}</Text>
          <Text style={styles.FriendHeaderDate}>{dateString(friend.createdOn)}</Text>
        </View>

        <View style={styles.FriendContent}>
          <Text style={styles.FriendBody}>
            {friend.body}
          </Text>
        </View>

        <CircleButton
          style={styles.editButton}
          onPress={() => { this.props.navigation.navigate('FriendEdit',  { friend, returnFriend: this.returnFriend.bind(this) }); }}
        >
          { "pencil" }
        </CircleButton>

        <CircleButton style={styles.funcButton} onPress= {this.handlePress.bind(this)}>
          { "trash-o" }
        </CircleButton>

        <CircleButton style={styles.favStar} fav={this.state.friend.fav} onPress= {this.handleClick.bind(this)}>
          { "star" }
        </CircleButton>
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
    height: 130,
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
  FriendHeaderUrl: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 8,
  },
  FriendHeaderDate: {
    fontSize: 12,
    color: '#fff',
  },
  FriendBody: {
    lineHeight: 24,
    fontSize: 15,
  },
  editButton: {
    top: -524,
  },
  FriendContent: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
    zIndex: 0,
  },
  funcButton: {
    top: -24,
    width: 36,
    height: 36,
    margin: 8,
    borderRadius: 36,
  },
  favStar: {
    top: -644,
    left: 16,
    backgroundColor: '#17313C',
    width: 36,
    height: 36,
    margin: 8,
    borderRadius: 36,
  },
});

export default FriendDetailScreen;
