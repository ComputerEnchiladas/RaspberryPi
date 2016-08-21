# Linux
Navigating through a linux environment has some commands one needs to remember. He they are so that we never forget.

* ```cat /proc/cpuinfo```
* ```cat /proc/meminfo```
* ```df -h```
* ```top```
* ```sudo service --status-all```
 
## Add startup script
* ```sudo vi /etc/init.d/<super_script>``` where _<super\_script>_ is your custom startup script name
* ```sudo chmod +x /etc/init.d/<super_script>```
* ```sudo update-rc.d <super_script> defaults```

### _<SuperScript>_ skeleton
