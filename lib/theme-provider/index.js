import { Component, PropTypes } from 'react';
import defaultTheme, { MergeTheme } from '../theme';

const propTypes = {
  children: PropTypes.element,
  theme: PropTypes.object,
};
const childContextTypes = {
  theme: PropTypes.object.isRequired,
};

const defaultProps = {
  theme: { name: 'Default Theme' },
};

class ThemeProvider extends Component {
  getChildContext() {
    return {
      theme: MergeTheme(this.props.theme),
    };
  }

  render() {
    return this.props.children;
  }
}

ThemeProvider.propTypes = propTypes;
ThemeProvider.childContextTypes = childContextTypes;
ThemeProvider.defaultProps = defaultProps;

export default ThemeProvider;
