

# Raspivid with NC
## On the all Raspberry Pis
```raspivid -t 0 -w 1280 -h 720 -ih -fps 20 -o - | nc -k -l ###.###.#.## 8090```

## On a mac running mplayer

ftp://ftp7.mplayerhq.hu/MPlayer/DOCS/HTML/en/index.html

```mplayer -fps 200 -demuxer h264es ffmpeg://tcp://###.###.###.###:8090```

Install [brew](https://brew.sh/), then `brew install mplayer`

# Raspivid with VLC
## On the Raspberry Pi (3 Only) 
```raspivid -t 0 -w 1280 -h 720 -ih -fps 20 -o - |cvlc -vvv stream:///dev/stdin --sout '#standard{access=http,mux=ts,dst=:8091}' :demux=h264```

## On vlc app (mobile phones)
Open Network stream using http://###.###.###.###:8091

- [Android](https://play.google.com/store/apps/details?id=org.videolan.vlc&hl=en)
- [iOS](https://itunes.apple.com/us/app/vlc-for-mobile/id650377962?mt=8)

# UV4L video streming server with web and omxplayer clients
## On the Raspberry Pi (3 Only)
https://www.linux-projects.org/uv4l/tutorials/streaming-server/

To install the uv4l driver, open the terminal and run the following commands:

$ wget http://www.linux-projects.org/listing/uv4l_repo/lrkey.asc && sudo apt-key add ./lrkey.asc

Add the following line to the file /etc/apt/sources.list :

$sudo nano /etc/apt/sources.list

deb http://www.linux-projects.org/listing/uv4l_repo/raspbian/ wheezy main

$ sudo apt-get update

$ sudo apt-get upgrade

$ sudo apt-get install uv4l uv4l-raspicam

$ sudo apt-get install uv4l-raspicam-extras

$ sudo apt-get install uv4l-server

$ sudo apt-get install uv4l-uvc

$ sudo apt-get install uv4l-xscreen

$ sudo apt-get install uv4l-mjpegstream

$ sudo reboot

## Clients
Open chrome browser and go to stream server url and port

Run omxplayer:
```omxplayer http://stream-server-ip:port/stream/video.mjpeg --live```

# FSWEBCAM (using usb camera)

http://www.slblabs.com/2012/09/26/rpi-webcam-stream/
https://www.raspberrypi.org/documentation/usage/webcams/

```fswebcam -d v4l2:/dev/video0 -r 1920x1080 --jpeg 95 -F 5 output.jpg```

```fswebcam -d v4l2:/dev/video0 --list-controls```

# FFMPEG

https://trac.ffmpeg.org/wiki/StreamingGuide
https://www.ffmpeg.org/

```ffmpeg -i /dev/video0 -c:v libx264 -preset ultrafast -crf 0 output.mkv```
