'use strict'
import React, { Component } from 'react';
import  {
  StyleSheet,
  Text,
} from 'react-native';

const Heading = ({size, weight, children, style}) => (
  <Text style={[styles.title, {fontSize: size, fontWeight: weight}, style]}>{children}</Text>
)

Heading.propTypes = {
  weight: React.PropTypes.string,
  size: React.PropTypes.number,
}

Heading.defaultProps = {
  weight: '600',
  size: 17,
  style: {},
}

var styles = StyleSheet.create({
  title: {
    marginLeft: 10,
  }
})

export default Heading;
