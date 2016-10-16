import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { gutter, error } from '../variables';

const FieldError = ({ errorMsg, error, color, marginBottom, style, textStyle }) => (
  <View style={[ style, styles.container, { marginBottom }]}>
    {error ? <Text style={[ textStyle, { color } ]}>
      {errorMsg}
    </Text> : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingLeft: 10,
  },
});

FieldError.defaultProps = {
  error: false,
  color: error,
  marginBottom: gutter,
  style: {},
  textStyle: {},
};

FieldError.propTypes = {
  errorMsg: React.PropTypes.string,
  error: React.PropTypes.bool,
  color: React.PropTypes.string,
  marginBottom: React.PropTypes.number,
};

export default FieldError;
