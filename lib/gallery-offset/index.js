import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';

const {height, width} = Dimensions.get('window');

import {gutter} from '../variables'

const GalleryOffset = ({imagesArray, display, onPress, style, imageStyle}) => {

  const images = imagesArray;
  // row
  if(display === 'row'){
    return (
      <View style={[ style, styles.row ]}>
        <TouchableOpacity onPress={onPress}>
          <Image source={{uri: images[0]}} style={[ imageStyle, styles.full ]}/>
        </TouchableOpacity>
        <View style={styles.lowerSection}>
          <TouchableOpacity onPress={onPress}>
            <Image source={{uri: images[1]}} style={[ imageStyle, styles.half ]}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress}>
            <Image source={{uri: images[2]}} style={[ imageStyle, styles.half ]}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  // column
  else {
    return (
      <View style={styles.column}>
        <TouchableOpacity onPress={onPress}>
          <Image source={{uri: images[0]}} style={[ imageStyle, styles.mainHalf ]}/>
        </TouchableOpacity>
        <View style={styles.lowerSectionColumn}>
          <TouchableOpacity onPress={onPress}>
            <Image source={{uri: images[1]}} style={[ imageStyle, styles.half ]}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress}>
            <Image source={{uri: images[2]}} style={[ imageStyle, styles.half ]}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: width/2*0.025
  },
  column: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width/2*0.025
  },
  lowerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lowerSectionColumn: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: width/2.025-(width/2*0.025),
    height: width-(width/2*0.025),
  },
  full: {
    width: width - (width/2*0.025)*2,
    height: width/2.05,
    marginBottom: width/2*0.025
  },
  mainHalf: {
    height: width-(width/2*0.025)*2,
    marginBottom: width/2*0.025,
    width: width/2.025-(width/2*0.025),
  },
  half: {
    width: width/2.025-(width/2*0.025),
    height: width/2.025-(width/2*0.025),
    marginBottom: width/2*0.025
  }
})

GalleryOffset.defaultProps = {
  display: 'column',
  gutter: gutter,
  style: {},
  imageStyle: {},
}
GalleryOffset.propTypes = {
  display: React.PropTypes.oneOf(['row', 'column']),
  gutter: React.PropTypes.number,
  onPress: React.PropTypes.func,
}

export default GalleryOffset;
