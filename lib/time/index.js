import React from 'react';
import {
  Text,
} from 'react-native';

import moment from 'moment';

const Time = ({ timestamp, color, style }) => (
  <Text style={[ style, { color } ]}>
    {moment(timestamp).format('LT')}
  </Text>
);

Time.propTypes = {
  timestamp: React.PropTypes.number,
  color: React.PropTypes.string,
};

Time.defaultProps = {
  color: '#222',
  style: {}
};

export default Time;
