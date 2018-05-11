import React from 'react';
import { StackNavigator } from 'react-navigation';
import firebase from 'firebase';

import FriendListScreen from './src/screens/FriendListScreen';
import FriendDetailScreen from './src/screens/FriendDetailScreen';
import FriendEditScreen from './src/screens/FriendEditScreen';
import NewFriendScreen from './src/screens/NewFriendScreen';
import FavoriteFriendScreen from './src/screens/FavoriteFriendScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import FavButton from './src/elements/FavButton';

require("firebase/firestore");
import ENV from './env.json';

const config = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DB_URL,
  projectId: ENV.FIREBASE_PRO_ID,
  storageBucket: ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID,
};
firebase.initializeApp(config);
/*
const firestore = firebase.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);
*/

const App = StackNavigator({
  Login: {screen: LoginScreen,
    navigationOptions: {
      header: null,
      },
    },
  Signup: {screen: SignupScreen,
    navigationOptions: {
      header: null,
      },
    },
  Home: { screen: FriendListScreen,
    navigationOptions: {
      headerTitle: 'Frever',
      headerTitleStyle: {
        textAlign: 'center',
        alignSelf: 'center',
      },
      header: ({ navigate }) => ({
        right: <FavButton navigate={navigate} />
      }),
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor:'#4eacd8',
        elevation: 3,
      },
    }},
  NewFriend: {screen: NewFriendScreen,
    navigationOptions: {
      headerTitle: 'Frever',
      headerTitleStyle: {
        textAlign: 'center',
        alignSelf: 'center',
      },
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor:'#4eacd8',
        elevation: 3,
      },
    }},
  FavFriend: {screen: FavoriteFriendScreen,
    navigationOptions: {
      headerTitle: 'Favorite',
      headerTitleStyle: {
        textAlign: 'center',
        alignSelf: 'center',
      },
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor:'#4eacd8',
        elevation: 3,
      },
    }},
  FriendDetail: { screen: FriendDetailScreen,
    navigationOptions: {
      headerTitle: 'Frever',
      headerTitleStyle: {
        textAlign: 'center',
        alignSelf: 'center',
      },
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor:'#4eacd8',
        elevation: 3,
      },
    }},
  FriendEdit: {screen: FriendEditScreen,
    navigationOptions: {
      headerTitle: 'Frever',
      headerTitleStyle: {
        textAlign: 'center',
        alignSelf: 'center',
      },
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor:'#4eacd8',
        elevation: 3,
      },
    }},
});

export default App;
