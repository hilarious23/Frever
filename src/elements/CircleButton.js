import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


class CircleButton extends React.Component {
  render() {
    return (
      <TouchableHighlight style={styles.container} onPress={this.props.onPress} underlayColor='transparent'>
        <View style={styles.CircleButton}>
          <Icon name = {this.props.children} style={styles.CircleIcon} />
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 32,
    right: 32,
  },
  CircleButton: {
    backgroundColor: '#ff6600',
    width: 64,
    height: 64,
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
})

export default CircleButton
