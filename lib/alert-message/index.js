/* @flow */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Close } from '../';
import { alertMessage } from '../variables';

const AlertMessage = ({ backgroundColor, color, message, onPress, style, textStyle, closeStyle }) => (
  <View style={[styles.row, { backgroundColor }, style]}>
    <Text style={[styles.text, { color }, textStyle]}>{message}</Text>
    <Close color={color} onPress={onPress} style={closeStyle} />
  </View>
);


const { color, backgroundColor } = alertMessage;

AlertMessage.defaultProps = {
  color,
  backgroundColor,
  style: {},
  textStyle: {},
  closeStyle: {},
};

AlertMessage.propTypes = {
  color: React.PropTypes.string,
  backgroundColor: React.PropTypes.string,
  message: React.PropTypes.string.isRequired,
  onPress: React.PropTypes.func,
};

var styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 0,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 2,
  },
  text: {
    fontSize: 15,
    fontWeight: '600',
  },
});

export default AlertMessage;
