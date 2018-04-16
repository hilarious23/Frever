import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Appbar extends React.Component {
  render() {
    return (
     <View style={styles.appbar}>
       <View>
         <Text style={styles.appbarTitle}>Frever</Text>
       </View>
     </View>
   );
  }
}

const styles = StyleSheet.create({
  appbar: {
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

export default Appbar;
