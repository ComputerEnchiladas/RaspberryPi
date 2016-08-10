# Server Installation and Configuration
Login to you RaspberryPi and get ready to install a custom server 

## Readings
* [HapiJS Tutorials](http://hapijs.com/tutorials)

## Git Source Code
We will be installing a NodeJs server using the [HapiJS](http://hapijs.com/) Framework

Open up a terminal and navigate to a location to checkout server code, then follow the commands below: 
* `git clone git@github.com:ComputerEnchiladas/mahrio-raspbian.git`
* `cd mahrio-raspbian`
* `npm install`
* `bower install`

## NPM Modules
Inside package.json you will find the NPM dependencies, as seen below, also provided are the url's in NPM
```
"dependencies": {
    "boom": "2.10.1",         // https://www.npmjs.com/package/boom
    "hapi": "8.8.1",          // https://www.npmjs.com/package/hapi
    "good": "6.3.0",          // https://www.npmjs.com/package/good
    "good-console": "5.3.1",  // https://www.npmjs.com/package/good-console
    "node-env-file": "0.1.8", // https://www.npmjs.com/package/node-env-file
    "ejs": "2.4.2"            // https://www.npmjs.com/package/ejs
  }
```
More info on [package.json](https://docs.npmjs.com/files/package.json)

## Bower Components
Inside bower.json you will find the UI component dependencies, similar to NPM but targeted towards the browser.

## NPM vs Bower
NPM (node package manager) is a package management tool for module dependencies in NodeJs-based apps. Bower is a component management tool for UI dependencies which run on the browser. Some libraries, frameworks or modules have support for both NPM and Bower within one since source code. When you install NPM it defaults to a `node_modules` folder at project's root level. Inside node modules you will see all installed dependencies. You can always remove this folder and reinstall but make sure to check if you have locked down versions or are always requesting latest. With locked versions things are safer. When you install Bower, the installation path defaults to project root level to but through the `.bowerrc` we changed it to be under _server/public/bower_components_.

## Exercises:
* Break down the home page (.ejs) to smaller pieces using server-side includes
* Add new route; `method: GET, path: /api/hello`, and have it return a json object; `{ "msg": "Hello World" }`
* Add jQuery as a bower component and connect it to load on the home page
* Add JavaScript to home page and using jQuery fetch the message from the path above, then display the message.
* Add a new page and link it to the home page
* Add Bootstrap as a bower component and connect it to load in the header of every page
