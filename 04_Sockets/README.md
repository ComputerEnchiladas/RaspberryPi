# WebSockets
## Reading
[https://en.wikipedia.org/wiki/WebSocket](https://en.wikipedia.org/wiki/WebSocket)

## Create an NPM module to handle socket connection
Now that we have a web (http) server up lets setup a socket one

In your project directory, open the file `server/index.js` and add the following line before the require routes config

* `require( './config/sockets' )( server );`
 
Next create a file at `config/sockets.js` and add code template below:

```
'use strict';

var io = null;

function main( server ) {
  io = require('socket.io').listen( server.listener );
  
  io.on('connection', function( socket ){
    console.log('socket listening...' + socket.id); // Record the connection

    socket.emit( 'event:hello' ); // Send message exclusively to new connection

    socket.on( 'disconnect', function(){
      console.log('goodbye socket...' + socket.id ); // Record the disconnection
    });
    
    // TODO: Listen for a custom event
    socket.on( 'gpio:21', function(){
     socket.emit( 'gpio:21', true);
    });
    
  });
};

module.exports = main;
```
