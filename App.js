import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.appbar}>
          <View>
            <Text style={styles.appbarTitle}>Frever</Text>
          </View>
        </View>

        <View style={styles.friendList}>
          <View style={styles.friendListItem}>
            <Text style={styles.friendName}>石川駿</Text>
            <Text style={styles.friendDate}>2017/10/10</Text>
          </View>

          <View style={styles.friendListItem}>
            <Text style={styles.friendName}>石川駿</Text>
            <Text style={styles.friendDate}>2017/10/10</Text>
          </View>

          <View style={styles.friendListItem}>
            <Text style={styles.friendName}>石川駿</Text>
            <Text style={styles.friendDate}>2017/10/10</Text>
          </View>
        </View>

        <View style={styles.friendAddButton}>
          <Text style={styles.friendAddButtonTitle}>+</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  friendAddButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: '#ea5e12',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  friendAddButtonTitle: {
    fontSize: 32,
    lineHeight: 36,
    color: '#fff'
  },

  friendList: {
    width: '100%',
    flex: 1,
    paddingTop: 80,
  },
  friendListItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  friendName: {
    fontSize: 18,
    marginBottom: 4,
  },
  friendDate: {
    fontSize: 12,
    color: '#a2a2a2',
  },

  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    paddingTop: 30,
    backgroundColor: '#4eacd8',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  appbarTitle: {
    color: '#fff',
    fontSize: 18,
  },

});
