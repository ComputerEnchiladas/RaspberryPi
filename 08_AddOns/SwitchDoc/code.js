var Gpio = require('onoff').Gpio;

var usb = new Gpio(5, 'high', 'rising', {activeLow: true} ); // Initializes the pin in off mode

usb.writeSync(1); // set's pin to on mode and turns SwitchDoc on

usb.writeSync(0); // set's pin to off mode and turns SwitchDoc off
