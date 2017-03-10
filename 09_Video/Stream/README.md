

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
