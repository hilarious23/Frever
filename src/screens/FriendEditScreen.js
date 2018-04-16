import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

import Appbar from '../components/Appbar';
import CircleButton from '../elements/CircleButton';


class FriendEditScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar />
        <TextInput style={styles.FriendEditInput} multiline blurOnSubmit={false} value="Hi"/>
        <CircleButton>
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
