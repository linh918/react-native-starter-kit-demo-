'use strict';
import { PropTypes } from 'react';
import { NativeModules, requireNativeComponent, View } from 'react-native';

var iface = {
  name: 'ProgressBar',
  propTypes: {
    progress: PropTypes.number,
    indeterminate: PropTypes.bool,
    color:PropTypes.string,
    ...View.propTypes // include the default view properties
  },
};
var ProgressBar = requireNativeComponent('ProgressBar', iface);

export default ProgressBar;