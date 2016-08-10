# Client
This section is for all things related to building the client. Can be either a web app, desktop app or mobile app.
## Web App
The web app is the easiest and most familiar of the three clients. It consists of being rendered through any of the popular browsers 
(IE Edge, Chrome, Safari, Firefox).

In the previous [server](https://github.com/ComputerEnchiladas/RaspberryPi/tree/master/03_Server) section there were instructions to program the rendering of pages. In addition, the jQuery
library was used to facilitate **_ajax_** calls to the server. In the [sockets](https://github.com/ComputerEnchiladas/RaspberryPi/tree/master/04_Sockets) section, we switched to using 
WebSockets.

## Mobile App
Hybrid-mobile apps are built using HTML, CSS & JavaScript where access to a phone's resources happens via [Apache Cordova](https://cordova.apache.org/). Cordova provides API's to various [plugins](https://cordova.apache.org/docs/en/latest/#plugin-apis) which have hardware access. When deployed to the phone it has the look and feel of a native app. Mobile app frameworks that extend and build upon Cordova are:

* [**_Ionic_**](http://ionicframework.com/)
* [**_PhoneGap_**](http://phonegap.com/)

## Desktop App
The desktop app is similar to the web app but it runs on the open-source chromium browser in headless mode (no menus; only close, minimize & maximize buttons). NodeJS is the environment that runs within the browser.

RaspberryPi can install Chromium and have it open in kiosk mode which is similar to desktop app. The difference of kiosk mode is that it does not have the close, minimize and maximize buttons very common to desktop apps.

### References
* [**_Electron_**](http://electron.atom.io/)
* [**_Electron: Git Repo_**](https://github.com/electron/electron)
* [**_Chromium_**](https://www.chromium.org/)

## Client Resources
### Front-End (client) Technologies
* [**_VanillaJS_**](http://vanilla-js.com/) is pure JavaScript
* [**_jQuery_**](https://jquery.com/) is a cross-platform (browsers) JavaScript library
* [**_AngularJS_**](https://angularjs.org/) is a framework for building Single Page Applications (SPA's)

### Front-End (client) Designing
* [**_Bootstrap_**](http://getbootstrap.com/) is a mobile-first framework for fast prototyping web pages (requires jQuery)
* [**_FontAwesome_**](http://fontawesome.io/) is an icon's library with css styling compatibility
* [**_Foundation_**](http://foundation.zurb.com/) is a mobile-first framework similar to Bootstrap
* [**_Material Design_**](http://material.google.com) is a design specification showcasing best practices for building web components
