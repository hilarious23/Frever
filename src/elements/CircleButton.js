import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


class CircleButton extends React.Component {
  render() {
    return (
      <View style={styles.CircleButton}>
        <Text style={styles.CircleIcon}>
          <Icon name = {this.props.children} />
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  CircleButton: {
    backgroundColor: '#ff6600',
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  CircleIcon: {
    fontSize: 24,
    color: '#fff',
    lineHeight: 36,
  },
})

export default CircleButton
