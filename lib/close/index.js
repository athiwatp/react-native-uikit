import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  close: {
    fontWeight: 'bold',
    margin: 0,
    padding: 0,
    color: '#fff',
  },
});

const Close = ({ size, color, onPress, style }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={[ style, styles.close, { fontSize: size, color }]}>
      ×
    </Text>
  </TouchableOpacity>
);

Close.defaultProps = {
  size: 25,
  color: '#222',
  style: {}
};

Close.propTypes = {
  size: React.PropTypes.number,
  color: React.PropTypes.string,
  onPress: React.PropTypes.func,
};

export default Close;
