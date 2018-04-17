import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import FriendListScreen from './src/screens/FriendListScreen';
import FriendDetailScreen from './src/screens/FriendDetailScreen';
import FriendEditScreen from './src/screens/FriendEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';


const App = StackNavigator({
  Login: {screen: LoginScreen},
  Signup: {screen: SignupScreen,},
  Home: { screen: FriendListScreen },
  FriendDetail: { screen: FriendDetailScreen },
  FriendEdit: {screen: FriendEditScreen},
},{
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
  },
});

export default App;
