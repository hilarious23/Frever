import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


class CircleButton extends React.Component {
  render() {
    const { style, fav } = this.props;

    let color = '#fff';

    if (fav === 1) {
      color = '#f9d13e';
    }
    return (
      <TouchableHighlight style={styles.container} onPress={this.props.onPress} underlayColor='transparent'>
        <View style={[styles.CircleButton, style]}>
          <Icon name = {this.props.children} style={[styles.CircleIcon, { color: color }]} />
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 32,
    right: 12,
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
