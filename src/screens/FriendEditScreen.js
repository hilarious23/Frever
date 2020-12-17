import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native';
import firebase from 'firebase';

import CircleButton from '../elements/CircleButton';
import Icon from 'react-native-vector-icons/FontAwesome';

class FriendEditScreen extends React.Component {
  state = {
    body: '',
    name: '',
    url: '',
    key: '',
    fav: false,
  }

  componentWillMount() {
    const { params } = this.props.navigation.state;
    this.setState({
      body: params.friend.body,
      name: params.friend.name,
      url: params.friend.url,
      key: params.friend.key,
      fav: params.friend.fav,
    });
  }

  handlePress() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const newDate = new Date();
    db.collection(`users/${currentUser.uid}/friends`).doc(this.state.key)
      .update({
        body: this.state.body,
        name: this.state.name,
        url: this.state.url,
        createdOn: newDate,
        fav: this.state.fav,
      })
      .then(() => {
        const { navigation } = this.props;
        navigation.state.params.returnFriend({
          body: this.state.body,
          name: this.state.name,
          url: this.state.url,
          key: this.state.key,
          createdOn: newDate,
          fav: this.state.fav,
        });
        navigation.goBack();
      })
      .catch((error) => {
        console.log('error');
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
          autoCorrect={false}
          value={this.state.body}
          onChangeText={(text) => { this.setState({ body: text }); }}
        />
        <CircleButton onPress= {this.handlePress.bind(this)}>
          { "check" }
        </CircleButton>

        <TouchableOpacity
          style={styles.favStar}
          onPress={this.handlePressFav.bind(this)}>
          <View style={styles.CircleButton}>
            <Icon name = {'star'}　style={styles.CircleIcon}/>
          </View>
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
    top: -680,
    left: 328,
  },
  CircleButton: {
    backgroundColor: '#ff6600',
    width: 36,
    height: 36,
    margin: 8,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  CircleIcon: {
    fontSize: 24,
    color: '#fff',
    lineHeight: 36,
  },
});

export default FriendEditScreen;
