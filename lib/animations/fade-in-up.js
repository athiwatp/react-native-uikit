'use strict'
import React, {
  Component,
  Text,
  StyleSheet,
  View,
  Animated,
} from 'react-native';


export default class FadeInUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0), // init opacity 0
    };
  }
  componentDidMount() {
    Animated.timing(          // Uses easing functions
      this.state.fadeAnim,    // The value to drive
      {
        toValue: 1,        // Target
        duration: 900,    // Configuration
      },
    ).start();                // Don't forget start!
  }
  render() {
    return (
      <Animated.View          // Special animatable View
        style={[ this.props.style || {}, {
          opacity: this.state.fadeAnim, // Binds directly
          transform: [{
            translateY: this.state.fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [15, 0]  // 0 : 150, 0.5 : 75, 1 : 0
            }),
          }],
        } ]}>
        {this.props.children}
      </Animated.View>
    );
  }
}


var styles = StyleSheet.create({
  thumbnail_img: {
    height: 350,
    resizeMode: 'cover'
  },
  segmented: {
    height: 30,
    width:300,
    tintColor: '#FF3D33',
  }
});
