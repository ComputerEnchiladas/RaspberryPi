

# Raspivid with NC
## On the all Raspberry Pis
```raspivid -t 0 -w 1280 -h 720 -ih -fps 20 -o - | nc -k -l ###.###.#.## 8090```

## On a mac running mplayer
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
```omxplayer http://192.168.0.8:9090/stream/video.mjpeg --live
```
