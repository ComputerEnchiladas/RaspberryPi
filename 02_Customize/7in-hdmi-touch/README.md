# AdaFruit 7in HDMI Touch Screen

## Configure boot option
`sudo vi /boot/config.txt`

Check to make sure the following lines are active (not commented out with #):
* _hdmi_force_hotplug=1_
* _hdmi_group=2_
* _hdmi_mode=1_
* _hdmi_mode=87_
* _vhdmi_cvt=800 480 60 6 0 0 0_
* _max_usb_current=1_
