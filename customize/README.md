# How to customize and advance settings

## Screen Rotate
`sudo vi /boot/config.txt`

Add any of the following:
* display_rotate=0 Normal
* display_rotate=1 90 degrees
* display_rotate=2 180 degrees 
* display_rotate=3 270 degrees
* display_rotate=0x10000 horizontal flip
* display_rotate=0x20000 vertical flip

## Chromium in kiosk mode
`sudo vi ~/.config/lxsession/LXDE-pi/autostart`

Add chromium with parameters options (see below):

`@chromium-browser --noerrdialogs --kiosk --incognito http://google.com`

Options:
* --kiosk **starts browser without menu (headless)**
* --noerrdialogs (*supressess any startup errors*)
* --incognito     # clear previous history
 
## Disable screensaver and power management

