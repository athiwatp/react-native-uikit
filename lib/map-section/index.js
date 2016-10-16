'use strict';
import React, { Component } from 'react';
import  {

  StyleSheet,
  Text,
  View,
  MapView,
} from 'react-native';

const MapSection = ({region, annotations, height, fullHeight, ...props}) => (
  <MapView
    {...props}
    style={[style, styles.map, {height: height, flex: fullHeight ? 1 : null}]}
    region={region}
    annotations= {annotations}
  />
);

const styles = StyleSheet.create({
  map: {
    //flex:1,
  }
});
MapSection.defaultProps = {
  height: 400,
  fullHeight: false,
  style: {},
}
MapSection.propTypes = {
  region: React.PropTypes.object,
  annotations: React.PropTypes.array,
  height: React.PropTypes.number,
  fullHeight: React.PropTypes.bool,
}

export default MapSection;
