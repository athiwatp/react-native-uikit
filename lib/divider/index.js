import React from 'react';
import {
  View,
} from 'react-native';

const Divider = ({ color, thickness, style }) => (
  <View style={[ { backgroundColor: color, height: thickness }, style ]} />
);

Divider.defaultProps = {
  color: '#eee',
  thickness: 1,
  style: {}
};

Divider.propTypes = {
  color: React.PropTypes.string,
  thickness: React.PropTypes.number,
};

export default Divider;
