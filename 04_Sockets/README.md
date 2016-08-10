# WebSockets
## Reading
[Socket.IO Documentation](http://socket.io/docs/)

## Server-side 
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
## Client-side
Install the bower component `socket.io-client` using the following command:
* `bower install socket.io-client --save`
 
Then create a new page, or use an existing one, and include the script path `/bower_components/socket.io-client/socket.io.js`

Now we will attempt to connect with the socket server. After including the bower component on your page we'll proceed to attempt a connection with the following code:
```
<script type="text/javascript">
var socket = io( );
socket.on( 'connect', function(){
  console.log('Socket has connected');
});
socket.on( 'event:hello', function(){
 console.log('Server says hello');
});
</script>
```

## Server-Client Relationship
The socket server is a centralized message dispatcher. It can have any number of clients connected. When it receives a connection a unique id can be found at `socket.id`. The same socket client making calls to the server is idenfieable this way, however the client may chose to drop and reconnect where then a new unique id will be created. Authentication & access control are available with sockets when paired with a database. 

Every client that connects to the server uses the socket parameter found in the callback (`io.on('connection', function callback(socket){...})`) where it is in an isolated closure. The `io` handle is listening for socket connections, but at the same time manages and stores all the connections.

The term _real-time_ is often used to describe client applications receiving information from the server immediately upon it's availability. For example, when we are listening to a motion sensor in the RaspberryPi and the motion is activated, the socket server on the Pi to immediately notifies the client. Traditional HTTP is stateless where the connection does not persist, so the server would not be able to send update to a client. With sockets the connection persists and is bi-directional; this allows the server to update any connected clients on the status of the sensor.

## Exercise
Create a chat application using sockets.
