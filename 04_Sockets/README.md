# WebSockets
## Reading
[https://en.wikipedia.org/wiki/WebSocket](https://en.wikipedia.org/wiki/WebSocket)

## Create an NPM module to handle socket connection
Now that we have a web (http) server up lets setup a socket one

In your project directory, open the file `server/index.js` and add the following line before the require routes config

* require( './config/sockets' )( server );
 
Next create a file at `config/sockets.js` and add code template below:

```
'use strict';

var messages = require('./sockets.messages'),
  rooms = require('./sockets.rooms'),
  users = require('./sockets.users'),
  io = null;

function main( server ) {
  var io = require('socket.io').listen( server.listener );
  server.sockets = {};
  server.rooms = {
    lobby: {
      owner: null,
      members: {},
      private: false
    }
  };
  
  io.on('connection', function( socket ){
    console.log('sockets listening...' + socket.id);

    socket.emit( 'event:hello' );

    server.sockets[ socket.id ] = {
      id: socket.id,
      name: 'Guest-'+socket.id,
      rooms: []
    };

    socket.on( 'disconnect', function(){
      var rooms = server.sockets[ socket.id ].rooms;
      for( var i = 0; i < rooms.length; i++ ) {
        if( server.rooms[ rooms[i] ] ) {
          if( server.rooms[ rooms[i] ].members ) {
            delete server.rooms[ rooms[i] ].members[ socket.id ];
            socket.broadcast.to( rooms[i] ).emit( 'event:room:leave', {name: rooms[i], user: socket.id } );
          }
        }
      }

      delete server.sockets[ socket.id ];

      console.log('goodbye ' + socket.id );
    });

    // Handle Rooms
    rooms( socket, server.rooms, server.sockets)

    // Handle Messages
    messages( socket, server.rooms, server.sockets );

    // Handle User
    users( socket, server.sockets );
  });
};

module.exports = main;
```
