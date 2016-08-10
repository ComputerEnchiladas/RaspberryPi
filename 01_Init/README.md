# Raspberry Pi Provisioning

## Raspbian OS - NOOBS (new out of box software)
* Go to the Raspberry Pi downloads( https://www.raspberrypi.org/downloads/noobs/ ) and download zip of NOOBS (current 1.9.2, released 2016-05-27).
* Format a microSD, then unzip NOOBS and copy what's inside the folder to the microSD.
* With Pi off, insert the microSD and power up.
* Select new Raspbian installation, installation takes around 30 minutes.

## Raspbian Software
### Updates + Dependencies
* `sudo apt-get update`
* `sudo apt-get dist-upgrade`
* `sudo apt-get install x11-xserver-utils unclutter`

### Chromium
If you have backed up the following three files to usb data storage you can skip the `wget ...` commands. 
* `wget http://ports.ubuntu.com/pool/universe/c/chromium-browser/chromium-browser-l10n_48.0.2564.82-0ubuntu0.15.04.1.1193_all.deb`
* `wget http://ports.ubuntu.com/pool/universe/c/chromium-browser/chromium-browser_48.0.2564.82-0ubuntu0.15.04.1.1193_armhf.deb`
* `wget http://ports.ubuntu.com/pool/universe/c/chromium-browser/chromium-codecs-ffmpeg-extra_48.0.2564.82-0ubuntu0.15.04.1.1193_armhf.deb`
* `sudo dpkg -i chromium-codecs-ffmpeg-extra_48.0.2564.82-0ubuntu0.15.04.1.1193_armhf.deb`
* `sudo dpkg -i chromium-browser-l10n_48.0.2564.82-0ubuntu0.15.04.1.1193_all.deb chromium-browser_48.0.2564.82-0ubuntu0.15.04.1.1193_armhf.deb`

### Git
Install
* `sudo apt-get install git`

Setup account and sign-in to [github](http://github.com)

**Setup ssh-key**

Follow there instruction to create and configure a public ssh-key with github.com

https://help.github.com/articles/generating-an-ssh-key/

### NodeJs
Raspbian will come with node version .10.29 pre-installed along with nodered, we will remove and install the latest (version 6)
* `sudo su -`
* `apt-get remove nodered -y`
* `apt-get remove nodejs nodejs-legacy -y`
* `curl -sL https://deb.nodesource.com/setup_6.x | sudo bash -`
* `sudo apt-get install -y nodejs`

### Youtube-DL
**Do not use _youtube-dl_ that is installed from `sudo apt-get install youtube-dl`**
* `sudo apt-get remove -y youtube-dl` (_if previously installed, then remove_)
* `sudo wget https://yt-dl.org/latest/youtube-dl -O /usr/local/bin/youtube-dl`
* `sudo chmod a+x /usr/local/bin/youtube-dl`
* `hash -r`
 
To use, first try downloading 720p (**_-f 22_**) and if it fails then ommit to get default.

`youtube-dl -f 22 https://www.youtube.com/watch?XXXXXXXXXX`

### VNC - Remote Desktop
* Todo ...

## Check installed software
Once complete, check software versions by running
* `chromium-browser --version`
* `git --version`
* `node -v`
* `npm -v`
