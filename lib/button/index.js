import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import { primary, gutter } from '../variables';

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

const Button = ({
  children, radius, fontWeight, fontSize,
  backgroundColor, color, gutter, onPress,
  style, textStyle
}) => (
  <TouchableOpacity
    style={[ style, { borderRadius: radius, backgroundColor, padding: gutter, marginBottom: gutter } ]}
    onPress={onPress}
  >
    <Text style={[ textStyle, styles.text, { color, fontSize, fontWeight }]}>
      {children}
    </Text>
  </TouchableOpacity>
);

Button.defaultProps = {
  radius: 4,
  backgroundColor: primary,
  color: '#fff',
  gutter,
  style: {},
  textStyle: {},
};

Button.propTypes = {
  radius: React.PropTypes.number,
  type: React.PropTypes.string,
  invert: React.PropTypes.bool,
  backgroundColor: React.PropTypes.string,
  color: React.PropTypes.string,
  gutter: React.PropTypes.number,
  fontWeight: React.PropTypes.string,
  children: React.PropTypes.string.isRequired,
  fontSize: React.PropTypes.number,
  onPress: React.PropTypes.func,
};

export default Button;
