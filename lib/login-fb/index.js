import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import { gutter } from '../variables';

const LoginFb = ({ onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[ styles.outer, style ]}>
    <Image source={require('./assets/fb-login-button.png')}/>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  outer: {
    alignItems: 'center',
    marginBottom: gutter,
  },
});

LoginFb.defaultProps = {
  style: {},
};

LoginFb.propTypes = {
  onPress: React.PropTypes.func,
};

export default LoginFb;
