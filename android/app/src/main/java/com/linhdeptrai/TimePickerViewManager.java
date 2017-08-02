package com.linhdeptrai;

import android.widget.TimePicker;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.WritableMap;

public class TimePickerViewManager extends SimpleViewManager<TimePicker> {

    public static final String REACT_CLASS = "TimePicker";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected TimePicker createViewInstance(ThemedReactContext reactContext) {
        return new TimePicker(reactContext);
    }

     public void onReceiveNativeEvent(final ThemedReactContext reactContext, final TimePicker timePicker) {
       timePicker.setOnTimeChangedListener(new TimePicker.OnTimeChangedListener() {
            @Override
            public void onTimeChanged(TimePicker view, int hourOfDay, int minute) {

                WritableMap event = Arguments.createMap();
                event.putInt("hourOfDay", hourOfDay);
                event.putInt("minute", minute);
                reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(timePicker.getId(), "timeChange", event);
            }
        });
    }
   

 @ReactProp(name = "hour", defaultInt = 0)
    public void setHour(TimePicker view, int hour) {
        view.setCurrentHour(hour); // before api level 23
        
    }

     @ReactProp(name = "minute", defaultInt = 0)
    public void setMinute(TimePicker view, int minute) {
       view.setCurrentMinute(minute); // before api level 23
       
    }
  @ReactProp(name = "enabled", defaultBoolean = false)
    public void setEnabled(TimePicker view, boolean enabled) {
        view.setEnabled (enabled);
    }
}