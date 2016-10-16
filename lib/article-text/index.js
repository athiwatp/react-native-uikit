import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { truncate } from 'lodash';
import { primary, gutter } from '../variables';

const styles = StyleSheet.create({
  row: {
    marginVertical: gutter,
  },
  user: {
    marginRight: gutter,
    marginBottom: 5,
    fontWeight: '600',
  },
  mainTxt: {

  },
});

const ArticleText = ({ username, text, highLightColor, onPress, style, userStyle, textStyle }) => (
  <View style={[ style, styles.row ]}>
    <TouchableOpacity onPress={onPress}>
      <Text style={[ userStyle, styles.user, { color: highLightColor }]}>
        {username}
      </Text>
    </TouchableOpacity>
    <Text style={[ textStyle, styles.mainTxt ]}>
      {truncate(text, {'length': 100, 'separator': /,? +/})}
    </Text>
  </View>
);

ArticleText.defaultProps = {
  highLightColor: primary,
  style: {},
  userStyle: {},
  textStyle: {},
};

ArticleText.propTypes = {
  username: React.PropTypes.string,
  text: React.PropTypes.string.isRequired,
  highLightColor: React.PropTypes.string,
  onPress: React.PropTypes.func,
};

export default ArticleText;
