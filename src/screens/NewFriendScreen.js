import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../elements/CircleButton';


class NewFriendScreen extends React.Component {
  state = {
    name: '',
    url: '',
    body: '',
    fav: '',
  }

handlePress() {
  console.log('(> <)')
  const db = firebase.firestore();
  const { currentUser } = firebase.auth();
  db.collection(`users/${currentUser.uid}/friends`).add({
    name: this.state.name,
    url: this.state.url,
    body: this.state.body,
    createdOn: new Date(),
    fav: this.state.fav,
  })
    .then(() => {
      this.props.navigation.goBack();
    })
    .catch((error) => {
      console.log(error);
    });
}

handlePressFav() {
  this.setState({ fav : 1 })
}


  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.FriendEditName}
          multiline
          blurOnSubmit={false}
          placeholder='Name'
          autoCapitalize="none"
          autoCorrect={false}
          value={this.state.name}
          onChangeText={(text) => { this.setState({ name: text }); }}
        />
        <TextInput
          style={styles.FriendEditUrl}
          multiline
          blurOnSubmit={false}
          placeholder='Facebook URL'
          autoCapitalize="none"
          autoCorrect={false}
          value={this.state.url}
          onChangeText={(text) => { this.setState({ url: text }); }}
        />
        <TextInput
          style={styles.FriendEditBody}
          multiline
          blurOnSubmit={false}
          placeholder='Personal Infomation'
          autoCapitalize="none"
          value={this.state.body}
          onChangeText={(text) => { this.setState({ body: text }); }}
        />

        <CircleButton onPress= {this.handlePress.bind(this)}>
          { "check" }
        </CircleButton>

        <TouchableOpacity
          style={styles.favStar}
          onPress={this.handlePressFav.bind(this)}>
          <Text>Fav</Text>
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
  },
  FriendEditName: {
    backgroundColor: '#ddd',
    textAlignVertical: 'top',
    flex: 0.4,
    paddingTop: 28,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 24,
  },
  FriendEditUrl: {
    backgroundColor: '#9fa1a3',
    textAlignVertical: 'top',
    flex: 0.2,
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
  FriendEditBody: {
    backgroundColor: '#fff',
    textAlignVertical: 'top',
    flex: 6,
    paddingTop: 28,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
  favStar: {
    top: -692,
    left: 240,
  },
});

export default NewFriendScreen;
