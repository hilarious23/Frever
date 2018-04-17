import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';



class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginContent}>
          <Text style={styles.title}>Frever</Text>
          <TextInput style={styles.input} value="Email Address" />
          <TextInput style={styles.input} value="Password" />
          <TouchableHighlight
           style={styles.button}
           onPress={() => {this.props.navigation.navigate('Home') }}
           underlayColor='#e25a00'
          >
           <Text style={styles.buttonText}> Login </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  title: {
    fontSize: 28,
    alignSelf: 'center',
    marginBottom: 24,
  },
  loginContent: {
    padding: 24,
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: '#eee',
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 8,
  },
  button: {
    backgroundColor: '#ff6600',
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '67%',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize:18,
  },
});

export default LoginScreen;
