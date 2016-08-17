# Homework
## Week 1
**Title:** Web Server & Git

**Tags:** Node, NPM, Bower, HTTP, HTML, CSS, JavaScript, Git

**Links:**

* [_hapijs_](http://hapijs.com/tutorials)
* [_expressjs_](http://socket.io/get-started/chat/) - ONLY **_The web framework_** & **_Serving HTML_**
* [hapi vs express](https://www.airpair.com/node.js/posts/nodejs-framework-comparison-express-koa-hapi)

**Procedure:** Setup a web server and checkin code to github. Install jQuery via Bower. The web server should display a static page.

## Week 2
**Title:** Message Passing with Sockets

**Tags:** JavaScript, Sockets

**Links:** 

* [Chat Tutorial](http://socket.io/get-started/chat/) - integrate sockets to your express or hapi server

**Procedure:** Setup a chat interface where two connected users can receive real-time message exchanges.

## Week 3
**Title:** Raspberry Pi

**Tags:** Node, JavaScript, Johnny-Five

**Links:** 

* [Johnny-Five](https://github.com/nebrius/raspi-io)

**Hardware:** 1 button & 1 LED

**Procedure:** Setup hardware button & LED, then program button's state as followed:

* pressed - turn on LED
* held - blink LED
* released - turn off LED

## Week 4
**Title:** Motion Sensor

**Tags:** Node, JavaScript, Johnny-Five

**Hardware:** Motion Sensor, 1 Button, 1 buzzer & 2 LEDs

**Procedure:** Configure the first LED as output relative to the button input. The system begins in off state, then button pressed and held turns system on and LED stays on. Press and hold button again to shut down system and LED. This will be the power up and power down state change. Next, when powered on activate the motion sensor so that when motion is detected it blinks the second LED and also sounds the buzzer. To turn off the alarm & LED (but not the system) have the button pressed and released (not held).

## Week 5
**Title:** Web Server with Sockets on RaspberryPi

**Tags:** Node, Sockets, HTTP, HTML, CSS, JavaScript

**Procedure:** Setup the web server with sockets on the raspberry pi.

## Week 6
**Title:** Motion Sensor II

**Tags:** Node, HTML, CSS, JavaScript, Johnny-Five

**Hardware:** Motion Sensor

**Procedure:** Create the same setup from week 4 but only use motion sensor. Then create a web interface using web server with sockets which will have a toggle on/off button to reflect system's on/off state. When system is on and motion sensor triggers, have the interface alert you in addition to sounding an alarm.

## Week 7 [Optional]
**Title:** Ionic Mobile App

**Tags:** Ionic, Angular, HTML, CSS, JavaScript

**Hardware:** Mobile Phone / Tablet (Android or iOS)

**Links:** 

* [Ionic](http://ionicframework.com/getting-started/)

**Procedure:** Create an new Ionic project and rebuild the web interface from week 6

## Week 8 [Optional]
Deploy Web Server to [Heroku Cloud](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction) and install socket-client on RaspberryPi. The Heroku server instance will be a proxy where data coming from the hardware is propagated to connected clients. In addition, Heroku will also proxy messages to the hardware.

Work on Final Project

## Week 9
Work on Final Project

## Week 10
Work on Final Project

## Week 11
Work on Final Project

## Week 12
Work on Final Project

## Week 13
Work on Final Project

## Week 14
Work on Final Project
