import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../elements/CircleButton';


class NewFriendScreen extends React.Component {
  state = {
    name: '',
    body: '',
  }

handlePress() {
  const db = firebase.firestore();
  const { currentUser } = firebase.auth();
  db.collection(`users/${currentUser.uid}/friends`).add({
    name: this.state.name,
    email: this.state.email,
    body: this.state.body,
    createdOn: new Date(),
  })
    .then(() => {
      this.props.navigation.goBack();
    })
    .catch((error) => {
      console.log(error);
    });
}

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.FriendEditName}
          multiline
          blurOnSubmit={false}
          placeholder='Name'
          value={this.state.name}
          onChangeText={(text) => { this.setState({ name: text }); }}
        />
        <TextInput
          style={styles.FriendEditEmail}
          multiline
          blurOnSubmit={false}
          placeholder='Email address'
          value={this.state.email}
          onChangeText={(text) => { this.setState({ email: text }); }}
        />
        <TextInput
          style={styles.FriendEditBody}
          multiline
          blurOnSubmit={false}
          placeholder='Personal Infomation'
          value={this.state.body}
          onChangeText={(text) => { this.setState({ body: text }); }}
        />
        <CircleButton onPress= {this.handlePress.bind(this)}>
          { "check" }
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
  },
  FriendEditName: {
    backgroundColor: '#ddd',
    textAlignVertical: 'top',
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 24,
  },
  FriendEditEmail: {
    backgroundColor: '#9fa1a3',
    textAlignVertical: 'top',
    flex: 2,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
  FriendEditBody: {
    backgroundColor: '#fff',
    textAlignVertical: 'top',
    flex: 3,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
});

export default NewFriendScreen;
