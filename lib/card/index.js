import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import { truncate } from 'lodash';
import { gutter } from '../variables';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderColor: '#D8D8D8',
    borderWidth: 1,
    shadowColor: '#D8D8D8',
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  clipRadius: {
    borderRadius: 4,
    overflow: 'hidden',
  },
  lowerSection: {
    padding: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: '500',
  },
  link: {
    fontSize: 15,
    marginTop: 5,
    color: '#979DA8',
  },
  img: {
    height: 200,
    resizeMode: 'cover',
  },
  imgBorderBtm: {
    borderColor: '#D8D8D8',
    borderTopWidth: 1,
    height: 1,
  },
});

const Card = ({
  src, title, link, radius, gutter,
  onPress, marginBottom, shadow,
  style, containerStyle, imageStyle, contentStyle, titleStyle, linkStyle
}) => (
  <View style={[ containerStyle, { marginHorizontal: gutter, borderRadius: radius, marginBottom } ]}>
    <View style={[ style, styles.card, { shadowOpacity: shadow ? 0.6 : 0, borderRadius: radius }]}>
      <View style={styles.clipRadius}>
        <TouchableOpacity onPress={onPress}>
          <Image source={{ uri: src }} style={[ imageStyle, styles.img ]} />
        </TouchableOpacity>
        <View style={styles.imgBorderBtm} />
        <View style={[ contentStyle, styles.lowerSection ]}>
          <Text style={[ titleStyle, styles.title ]}>
            { truncate(title, { 'length': 64, 'separator': /,? +/ })}
          </Text>
          <TouchableOpacity onPress={onPress}>
            <Text style={[ linkStyle, styles.link ]}>{link}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
);

Card.defaultProps = {
  gutter,
  radius: 4,
  marginBottom: 0,
  shadow: true,
  style: {},
  containerStyle: {},
  imageStyle: {},
  contentStyle: {},
  titleStyle: {},
  linkStyle: {},
};

Card.propTypes = {
  src: React.PropTypes.string,
  title: React.PropTypes.string,
  link: React.PropTypes.string,
  gutter: React.PropTypes.number,
  onPress: React.PropTypes.func,
  marginBottom: React.PropTypes.number,
  shadow: React.PropTypes.bool,
  radius: React.PropTypes.number,
};

export default Card;
