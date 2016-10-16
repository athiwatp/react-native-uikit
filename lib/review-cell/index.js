import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import { truncate } from 'lodash';

import { gutter, grey, lightGrey } from '../variables';

import { RatingBox } from '../';

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
  },
  title: {
    flex: 1,
    fontSize: 17,
  },
  description: {
    flex: 1,
    fontSize: 13,
    color: grey,
  },
  content: {
    height: 75,
    flex: 1,
    flexDirection: 'column',
  },
});

const ReviewCell = ({
  title, description, src, onPress, gutter, outOf, rating,
  containerStyle, style, titleStyle, descriptionStyle,
  ratingStyle, ratingContainerStyle, ratingStarStyle, imageStyle
}) => (
  <TouchableOpacity
    style={[ styles.row, { borderColor: lightGrey, marginLeft: gutter }, containerStyle ]}
    onPress={onPress}
  >
    <View style={[styles.content, { paddingBottom: gutter }, style]}>
      <Text style={[styles.title, { marginTop: gutter }, titleStyle]}>
        {title}
      </Text>
      <Text style={[ styles.description, descriptionStyle ]}>
        {truncate(description, { 'length': 44, 'separator': /,? +/ })}
      </Text>
      <RatingBox rating={rating} outOf={outOf} style={ratingStyle}
        containerStyle={ratingContainerStyle} ratingStyle={ratingStarStyle} />
    </View>
    <Image
      source={{ uri: src }}
      style={[ styles.thumb, { height: 75, width: 70 }, imageStyle]}
    />
  </TouchableOpacity>
);

ReviewCell.defaultProps = {
  gutter,
  containerStyle: {},
  style: {},
  titleStyle: {},
  descriptionStyle: {},
  ratingStyle: {},
  ratingContainerStyle: {},
  ratingStarStyle: {},
  imageStyle: {}
};

ReviewCell.propTypes = {
  title: React.PropTypes.string,
  description: React.PropTypes.string,
  src: React.PropTypes.string,
  onPress: React.PropTypes.func,
  gutter: React.PropTypes.number,
  outOf: React.PropTypes.number.isRequired,
  rating: React.PropTypes.number.isRequired,
};

export default ReviewCell;
