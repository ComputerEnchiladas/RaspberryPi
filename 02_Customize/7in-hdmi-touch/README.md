# AdaFruit 7in HDMI Touch Screen

## Configure boot option
`sudo vi /boot/config.txt`

### Add HDMI Config
Add (by uncommenting; #) + Change the following hdmi properties:
* _hdmi_force_hotplug=1_
* _hdmi_group=2_
* _hdmi_mode=1_
* _hdmi_mode=87_
* _vhdmi_cvt=800 480 60 6 0 0 0_
* _max_usb_current=1_

### Remove HDMI Config
Add hash, #, at beginning of each line to comment out all six of the hdmi properties above.
