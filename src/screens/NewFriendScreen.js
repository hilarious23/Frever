import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../elements/CircleButton';


class NewFriendScreen extends React.Component {
  state = {
    body: '',
  }

handlePress() {
  const { params } = this.props.navigation.state;
  const db = firebase.firestore();
  db.collection(`users/${params.currentUser.uid}/friends`).add({
    body: "this.state.body",
    createdOn: new Date(),
  })
    .then((docRef) => {
      console.log(docRef.id);
    })
    .catch((error) => {
      console.log(error);
    });
}

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.FriendEditInput}
          multiline
          blurOnSubmit={false}
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
  FriendEditInput: {
    backgroundColor: '#fff',
    textAlignVertical: 'top',
    flex: 1,
    paddingTop: 32,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    fontSize: 16,
  },
});

export default NewFriendScreen;
