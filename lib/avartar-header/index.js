import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { gutter } from '../variables';
import { Heading, Avatar, DateItem } from '../';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  titleContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

const AvartarHeader = ({
  src, timestamp, heading, circle, backgroundColor, height, gutter,
  avatarStyle, avatarContainerStyle, avatarImageStyle, style, headingStyle, dateStyle,
}) => (
  <View style={[containerStyle, styles.header, { backgroundColor, padding: gutter}]}>
    <Avatar
      circle={circle}
      size={height}
      src={src}
      style={avatarStyle}
      containerStyle={avatarContainerStyle}
      imageStyle={avatarImageStyle}
    />
    <View style={[ style, styles.titleContainer, { height }]}>
      <Heading size={15} weight={'600'} style={headingStyle}>{heading}</Heading>
      <DateItem timestamp={timestamp} style={dateStyle} />
    </View>
  </View>
);

AvartarHeader.defaultProps = {
  height: 40,
  gutter,
  avatarStyle: {},
  avatarContainerStyle: {},
  avatarImageStyle: {},
  containerStyle: {},
  style: {},
  headingStyle: {},
  dateStyle: {},
};

AvartarHeader.propTypes = {
  src: React.PropTypes.string.isRequired,
  timestamp: React.PropTypes.number.isRequired,
  heading: React.PropTypes.string.isRequired,
  circle: React.PropTypes.bool,
  backgroundColor: React.PropTypes.string,
  height: React.PropTypes.number,
  gutter: React.PropTypes.number,
};

export default AvartarHeader;
