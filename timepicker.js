'use strict';
import React, { Component, PropTypes } from 'react';  
import { NativeModules, requireNativeComponent, View, Text } from 'react-native';

class TimePickerComponent extends Component {

    constructor(props) {
        super(props);
        this._onChange = this._onChange.bind(this);
    }

    _onChange(event) {
      console.log("event");
        if(!this.props.onTimeChange) {
            return;
        }
        this.props.onTimeChange(event.nativeEvent);
    }

    render() {
        return <TimePickerView {...this.props} onChange={this._onChange} />;
    }
}


TimePickerComponent.propTypes = {
	hour: PropTypes.number,
	minute: PropTypes.number,
	onTimeChange: PropTypes.func,
	...View.propTypes,
}

const TimePickerView = requireNativeComponent(`TimePicker`, TimePickerComponent, {
	nativeOnly: { 
		onChange: true,
	},
});

export default TimePickerComponent;