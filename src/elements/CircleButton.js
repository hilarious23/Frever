import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CircleButton extends React.Component {
  render() {
    const { style, color }=this.props;

    let bgColor = "#ea5e12";
    let textColor ="#fff";

    if (color === "white") {
      bgColor = "#fff";
      textColor ="#ea5e12";
    }

    return (
      <View style={[styles.CircleButton, style, {backgroundColor: bgColor }]}>
        <Text style={[styles.CircleButtonTitle, {color: textColor}]}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  CircleButton: {
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
  CircleButtonTitle: {
    fontSize: 32,
    lineHeight: 36,
  },
})

export default CircleButton
