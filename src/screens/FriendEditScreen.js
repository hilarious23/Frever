import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import firebase from 'firebase';

import CircleButton from '../elements/CircleButton';

class FriendEditScreen extends React.Component {
  state = {
    body: '',
    key: '',
  }


  componentWillMount() {
    const { params } = this.props.navigation.state;
    this.setState({
      body: params.friend.body,
      key: params.friend.key,
    });
  }

  handlePress() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const newDate = new Date();
    db.collection(`users/${currentUser.uid}/friends`).doc(this.state.key)
      .update({
        body: this.state.body,
        createdOn: newDate,
      })
      .then(() => {
        const { navigation } = this.props;
        navigation.state.params.returnFriend({
          body: this.state.body,
          key: this.state.key,
          createdOn: newDate,
        });
        navigation.goBack();
      })
      .catch((error) => {
        console.log('error');
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
          onChangeText={(text) => { this.setState({body: text }); }}
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

export default FriendEditScreen;
