import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';

import FriendList from '../components/FriendList';
import CircleButton from '../elements/CircleButton';


//{this.props.navigation.navigate('FriendEdit') }
class FriendListScreen extends React.Component {
  handlePress() {
    const db = firebase.firestore();
    db.collection('friends').add({
      body: "test friend",
      createdOn: '2017-12-12',
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
        <FriendList navigation={this.props.navigation} />
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
