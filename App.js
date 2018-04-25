import { StackNavigator } from 'react-navigation';
import firebase from 'firebase';

import FriendListScreen from './src/screens/FriendListScreen';
import FriendDetailScreen from './src/screens/FriendDetailScreen';
import FriendEditScreen from './src/screens/FriendEditScreen';
import NewFriendScreen from './src/screens/NewFriendScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

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

const App = StackNavigator({
  Login: {screen: LoginScreen},
  Signup: {screen: SignupScreen},
  Home: { screen: FriendListScreen },
  NewFriend: {screen: NewFriendScreen},
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
