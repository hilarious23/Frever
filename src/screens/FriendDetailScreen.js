import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import CircleButton from '../elements/CircleButton';

const dateString = (date) => {
  const str = date.toISOString();
  return str.split('T')[0];
}


class FriendDetailScreen extends React.Component {
  state = {
    friend: {},
  }

  componentWillMount() {
    const {params} = this.props.navigation.state;
    this.setState({ friend: params.friend });
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
            onPress={() => { this.props.navigation.navigate('FriendEdit', { friend: friend}); }}>
            { "pencil" }
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

  },
  FriendContent: {
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
    zIndex: 0,
  },
});

export default FriendDetailScreen;
