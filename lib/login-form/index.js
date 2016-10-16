import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { Button, InputField, FieldError } from '../';

const styles = StyleSheet.create({
  form: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 50,
  },
});

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onEmailChange(text) {
    this.setState({
      email: text,
    });
  }
  onPasswordChange(text) {
    this.setState({
      password: text,
    });
  }
  onSubmit() {
    this.props.onSubmit(this.state.email, this.state.password);
  }
  render() {
    const {
      inputRadius, error, errorMsg, btnBackgroundColor, btnColor, btnRadius,
      style, inputStyle, usernameStyle, passwordStyle, btnStyle, btnTextStyle,
      errorStyle, errorTextStyle,
    } = this.props;
    return (
      <View style={[ style, styles.form ]}>
        <InputField
          placeHolder={'email'}
          radius={inputRadius}
          onChange={this.onEmailChange}
          style={[ inputStyle, usernameStyle ]}
        />
        <InputField
          placeHolder={'password'}
          radius={inputRadius}
          onChange={this.onPasswordChange}
          style={[ inputStyle, passwordStyle ]}
        />
        <FieldError
          errorMsg={errorMsg}
          error={error}
          style={errorStyle}
          textStyle={errorTextStyle}
        />
        <Button
          color={btnColor}
          backgroundColor={btnBackgroundColor}
          onPress={this.onSubmit}
          radius={btnRadius}
          style={btnStyle}
          textStyle={btnTextStyle}
        >
          Submit
        </Button>
      </View>
    );
  }
}

LoginForm.defaultProps = {
  error: false,
  errorMsg: 'something went wrong',
  style: {},
  inputStyle: {},
  usernameStyle: {},
  passwordStyle: {},
  btnStyle: {},
  btnTextStyle: {},
  errorStyle: {},
  errorTextStyle: {},
};

LoginForm.propTypes = {
  backgroundColor: React.PropTypes.string,
  radius: React.PropTypes.number,
  color: React.PropTypes.string,
  errorMsg: React.PropTypes.string,
  onSubmit: React.PropTypes.func,
  inputRadius: React.PropTypes.number,
  error: React.PropTypes.bool,
  btnBackgroundColor: React.PropTypes.string,
  btnColor: React.PropTypes.string,
  btnRadius: React.PropTypes.number,
};
