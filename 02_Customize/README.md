# How to customize and advance settings

## Main Config
`sudo raspi-config`

## Reboot
`sudo reboot`

## Screen Rotate
`sudo vi /boot/config.txt`

Add any of the following:
* _display_rotate=0 Normal_
* _display_rotate=1 90 degrees_
* _display_rotate=2 180 degrees_
* _display_rotate=3 270 degrees_
* _display_rotate=0x10000 horizontal flip_
* _display_rotate=0x20000 vertical flip_

## Chromium in kiosk mode
`sudo vi ~/.config/lxsession/LXDE-pi/autostart`

Add chromium with parameters options (see below):

_@chromium-browser --noerrdialogs --kiosk --incognito http://google.com_

Options:
* --kiosk **starts browser without menu (headless)**
* --noerrdialogs (*supressess any startup errors*)
* --incognito     # clear previous history
 
## Disable screensaver
`sudo vi /etc/xdg/lxsession/LXDE/autostart`

`sudo vi /etc/xdg/lxsession/LXDE-pi/autostart`

`sudo vi ~/.config/lxsession/LXDE-pi/autostart`

Remove the command:
* _@xscreensaver -no-splash_

## Disable power management settings
`sudo vi ~/.config/lxsession/LXDE-pi/autostart`

Add these commands:
* _@xset s off_
* _@xset -dpms_
* _@xset s noblank_
 

## Prevent screen errors in case of power resets
`sudo vi ~/.config/lxsession/LXDE-pi/autostart`

Add the command:
* _@sed -i 's/"exited_cleanly": false/"exited_cleanly": true/' ~/.config/chromium/Default/Preferences_
