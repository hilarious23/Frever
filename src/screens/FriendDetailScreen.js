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
  }

  componentWillMount() {
    const { params } = this.props.navigation.state;
    this.setState({
      friend: params.friend,
      key: params.friend.key,
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

  render() {
    const { friend } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.FriendHeader}>
          <Text style={styles.FriendHeaderTitle}>{friend.body.substring(0, 10)}</Text>
          <Text style={styles.FriendHeaderDate}>{dateString(friend.createdOn)}</Text>
        </View>

        <View style={styles.FriendContent}>
          <Text style={styles.FriendBody}>
            {friend.body}
          </Text>
        </View>

        <View style={styles.editButton}>
          <CircleButton
            onPress={() => { this.props.navigation.navigate('FriendEdit',  { friend, returnFriend: this.returnFriend.bind(this) }); }}
          >
            { "pencil" }
          </CircleButton>
        </View>
        <View style={styles.funcButton}>
          <CircleButton onPress= {this.handlePress.bind(this)}>
            { "trash-o" }
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
  FriendBody: {
    lineHeight: 24,
    fontSize: 15,
  },
  editButton: {
    top: 0,
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
    top: -120,
  },
});

export default FriendDetailScreen;
