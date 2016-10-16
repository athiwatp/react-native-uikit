import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import { gutter } from '../variables';

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

const ButtonOutline = ({
  children, radius, backgroundColor, borderWidth, color,
  fontWeight, fontSize, gutter, onPress, style, textStyle
}) => (
  <TouchableOpacity
    style={[ styles.btn, {
      borderRadius: radius,
      backgroundColor,
      borderWidth,
      borderColor: color,
      padding: gutter,
      marginBottom: gutter,
    }, style]}
    onPress={onPress}
  >
    <Text
      style={[ styles.text, {
        color,
        fontSize,
        fontWeight,
      }, textStyle]}
    >
      {children}
    </Text>
  </TouchableOpacity>
);

ButtonOutline.defaultProps = {
  radius: 4,
  borderWidth: 2,
  backgroundColor: 'transparent',
  color: '#fff',
  gutter,
  style: {},
  textStyle: {},
};

ButtonOutline.propTypes = {
  radius: React.PropTypes.number,
  type: React.PropTypes.string,
  invert: React.PropTypes.bool,
  backgroundColor: React.PropTypes.string,
  color: React.PropTypes.string,
  borderWidth: React.PropTypes.number,
  gutter: React.PropTypes.number,
  children: React.PropTypes.string.isRequired,
  fontWeight: React.PropTypes.string,
  fontSize: React.PropTypes.number,
  onPress: React.PropTypes.func,
};

export default ButtonOutline;
