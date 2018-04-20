import React from 'react';
import { StyleSheet, View } from 'react-native';

import FriendList from '../components/FriendList';
import CircleButton from '../elements/CircleButton';


class FriendListScreen extends React.Component {
  handlePress() {
    const { params } =this.props.navigation.state;
    this.props.navigation.navigate('NewFriend', { currentUser: params.currentUser});
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
