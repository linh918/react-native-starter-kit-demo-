'use strict';
import { PropTypes } from 'react';
import { NativeModules, requireNativeComponent, View } from 'react-native';

var iface = {
  name: 'TimePicker',
  propTypes: {
   timeChange: PropTypes.func,
   hour:PropTypes.number,
   minute:PropTypes.number,
   enabled:PropTypes.bool,
    ...View.propTypes // include the default view properties
  },
};
var TimePicker = requireNativeComponent('TimePicker', iface);

export default TimePicker;