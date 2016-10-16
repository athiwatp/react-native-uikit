import React from 'react';
import {
  View,
} from 'react-native';

import Rating from './rating';

const RatingBox = ({ rating, outOf, style, containerStyle, ratingStyle }) => (
  <View style={containerStyle}>
    <Rating value={rating} max={outOf} style={style} ratingStyle={ratingStyle} />
  </View>
);

RatingBox.defaultProps = {
  style: {},
  containerStyle: {},
  ratingStyle: {},
}

export default RatingBox;

RatingBox.propTypes = {
  rating: React.PropTypes.number.isRequired,
  outOf: React.PropTypes.number.isRequired,
};
