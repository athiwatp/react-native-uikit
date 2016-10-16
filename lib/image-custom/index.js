import React from 'react';
import {
  Image,
  View,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

const ImageCustom = ({
  src, height, children, blurRadius, fullHeight, overlayOpacity, overlayColor,
  style, contentStyle,
}) => (
  <Image source={{ uri: src }}
    blurRadius={blurRadius}
    style={[ { resizeMode: 'cover', height, flex: fullHeight ? 1 : 0 }, style ]}
  >
    <View style={[styles.overlay, { backgroundColor: overlayColor, opacity: overlayOpacity }, contentStyle]} />
      {children}
  </Image>
);

ImageCustom.defaultProps = {
  height: 300,
  blurRadius: 0,
  fullHeight: false,
  overlayOpacity: 0,
  overlayColor: '#000',
  style: {},
  contentStyle: {},
};

ImageCustom.propTypes = {
  src: React.PropTypes.string,
  height: React.PropTypes.number,
  blurRadius: React.PropTypes.number,
  fullHeight: React.PropTypes.bool,
  overlayOpacity: React.PropTypes.number,
  overlayColor: React.PropTypes.string,
  children: React.PropTypes.element,
};

export default ImageCustom;
