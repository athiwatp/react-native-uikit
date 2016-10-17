import React, { Component } from 'react';
import  {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

import {grey} from '../variables'

class Rating extends Component {
  render() {
    var items = [];
    for(var i = 1; i <= this.props.max; i++) {
      var clickHandler = this.props.onRatingSelected && this.props.onRatingSelected.bind(null, i);
      const active = (i <= this.props.value) ? {color: '#FC9503'} : {color: grey}
      items.push(
        <Text key={i} style={[ active, this.props.ratingStyle ]}/*className={i <= this.props.value && 'filled'}*/ onPress={clickHandler}>{'\u2605'}</Text>
      )
    }
    return (
      <View style={[ styles.row, this.props.style ]}>{items}</View>
    );
  }
}

export default Rating;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex:1,
  }
})
