import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
} from 'react-native';

import { gutter } from '../variables';

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: '#D8D8D8',
    borderWidth: 1,
    paddingHorizontal: 10,
  },
});

export default class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }
  onChange(text) {
    this.setState({
      text,
    });
  }
  render() {
    const {
      placeHolder, gutter, color, backgroundColor, style,
      radius, onChange, autoCapitalize, autoCorrect } = this.props;
    return (
      <TextInput
        style={[ styles.input, {
          marginBottom: gutter,
          backgroundColor,
          borderRadius: radius,
        }, style]}
        onChangeText={(text) => {
          this.onChange(text);
          onChange(text);
        }}
        value={this.state.text}
        placeholder={placeHolder}
        placeholderTextColor={color}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
      />
    );
  }
}

InputField.defaultProps = {
  gutter,
  color: '#9197A3',
  backgroundColor: '#FAFAFA',
  radius: 4,
  autoCapitalize: 'none',
  autoCorrect: false,
  style: {}
};

InputField.propTypes = {
  placeHolder: React.PropTypes.string,
  color: React.PropTypes.string,
  backgroundColor: React.PropTypes.string,
  gutter: React.PropTypes.number,
  radius: React.PropTypes.number,
  autoCapitalize: React.PropTypes.string,
  autoCorrect: React.PropTypes.bool,
  onChange: React.PropTypes.func,
};
