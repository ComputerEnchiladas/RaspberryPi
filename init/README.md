# Raspberry Pi Provisioning

## Raspbian OS - NOOBS (new out of box software)
* Go to the Raspberry Pi (https://www.raspberrypi.org/downloads/noobs/)[downloads] and download zip of NOOBS (current 1.9.2, released 2016-05-27).
* Format a microSD, then unzip NOOBS and copy what's inside the folder to the microSD.
* With Pi off, insert the microSD and power up.
* Select new Raspbian installation, installation takes around 30 minutes.

## Raspbian Software
### Updates
* ```sudo apt-get update```
* ```sudo apt-get dist-upgrade```
### Chromium
If you have backed up the following three files to usb data storage, you can locate them and go straight to `sudo dpkg ...`. To install chromium open up the terminal and proceed with instructions. 
* ```wget http://ports.ubuntu.com/pool/universe/c/chromium-browser/chromium-browser-l10n_48.0.2564.82-0ubuntu0.15.04.1.1193_all.deb```
* ```wget http://ports.ubuntu.com/pool/universe/c/chromium-browser/chromium-browser_48.0.2564.82-0ubuntu0.15.04.1.1193_armhf.deb```
* ```wget http://ports.ubuntu.com/pool/universe/c/chromium-browser/chromium-codecs-ffmpeg-extra_48.0.2564.82-0ubuntu0.15.04.1.1193_armhf.deb```
* ```sudo dpkg -i chromium-codecs-ffmpeg-extra_48.0.2564.82-0ubuntu0.15.04.1.1193_armhf.deb```
* ```sudo dpkg -i chromium-browser-l10n_48.0.2564.82-0ubuntu0.15.04.1.1193_all.deb chromium-browser_48.0.2564.82-0ubuntu0.15.04.1.1193_armhf.deb```
### NodeJs
Raspbian will come with node version .10.29 pre-installed along with nodered, we will remove and install the latest (version 6)
* ```sudo su -```
* ```apt-get remove nodered -y```
* ```apt-get remove nodejs nodejs-legacy -y```
* ```curl -sL https://deb.nodesource.com/setup_6.x | sudo bash -```
* ```sudo apt-get install -y nodejs```
Once complete, check your node and npm version numbers by running
* `node -v`
* ```npm -v```
