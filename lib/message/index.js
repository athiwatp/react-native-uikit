import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import { info, grey, lightGrey } from '../variables';
import { Time } from '../';

function isActive(active) {
  if (active) {
    return {
      backgroundColor: info,
    };
  }
  return {
    backgroundColor: lightGrey,
  };
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 0,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 2,
    marginBottom: 2,
    borderColor: '#C8C7CC',
    borderBottomWidth: 1,
  },
  message: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 8,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  more: {
    marginLeft: 10,
    marginTop: 2,
  },
  user: {
    fontWeight: 'bold',
    flex: 1,
    marginBottom: 2,
  },
  title: {
    fontWeight: '500',
    marginBottom: 2,
  },
  bodyText: {
    color: grey,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginTop: 5,
    alignSelf: 'flex-start',
  },
});

const Message = ({
  user, title, timestamp, message, active, onPress,
  style, containerStyle, headerStyle, userStyle, timestampStyle,
  titleStyle, messageStyle,
}) => (
  <TouchableOpacity style={[ containerStyle, styles.row ]} onPress={onPress}>
    <View style={[isActive(active), styles.dot]} />
    <View style={[ style, styles.message ]}>
      <View style={[ headerStyle, styles.header ]}>
        <Text style={[ userStyle, styles.user ]}>
          {user}
        </Text>
        <Time color={grey} timestamp={timestamp} style={timestampStyle} />
        <Image
          source={ require('./assets/more.png') }
          style={[ styles.more, { height: 12, width: 7 }]}
        />
      </View>
      <Text style={[ titleStyle, styles.title ]}>
        {title}
      </Text>
      <Text style={[ messageStyle, styles.bodyText ]}>
        {message}
      </Text>
    </View>
  </TouchableOpacity>
);


Message.defaultProps = {
  active: true,
  style: {},
  containerStyle: {},
  headerStyle: {},
  userStyle: {},
  timestampStyle: {},
  titleStyle: {},
  messageStyle: {},
};
Message.propTypes = {
  user: React.PropTypes.string,
  title: React.PropTypes.string,
  timestamp: React.PropTypes.number,
  message: React.PropTypes.string,
  active: React.PropTypes.bool,
  onPress: React.PropTypes.func,
};

export default Message;
