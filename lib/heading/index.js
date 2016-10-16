'use strict'
import React, { Component } from 'react';
import  {
  StyleSheet,
  Text,
} from 'react-native';

const Heading = ({size, weight, children, style}) => (
  <Text style={[style, styles.title, {fontSize: size, fontWeight: weight}, ]}>{children}</Text>
)

Heading.propTypes = {
  weight: React.PropTypes.string,
  size: React.PropTypes.number,
  style: {},
}

Heading.defaultProps = {
  weight: '600',
  size: 17
}

var styles = StyleSheet.create({
  title: {
    marginLeft: 10,
  }
})

export default Heading;
