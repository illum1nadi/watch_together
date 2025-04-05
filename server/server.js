//Importing the necessary.
const http = require('http');
const app = require('./app');
const {Server} = require('socket.io')

//Creating an http server using our express app's routes and middleware.
const server = http.createServer(app);

//Creating a Socket.io server that is attached to the http server, origin is set to access from any domain as it is in developement.
const io = new Server(server, {
  cors : {
    origin : '*',
    methods : ['GET', 'POST', 'PUT', 'DELETE']
  }
});

//io is to listen from everyone and socket is to listen from a particular client.

//This is an event listener on the socket io server to look for the connection eevnt.
io.on('connection', (socket) => {
  const socketId = socket.id;
  console.log('A client has connected with id : ', socketId);

  //This is an event listener for a custom event join room which lets you join a particular room(socket).
  socket.on('joinRoom', (roomId) => {
    socket.join(roomId);
    console.log(`The socket with id ${socket.id} joined room ${roomId}`);
  });
  
  
  //Event listener to send a message across the socket.
  socket.on('chatMessage', ({roomId, message}) => {
    //Broadcasts the message to everyone connected to the socket except the person who sent the message.
    socket.to(roomId).emit('chatMessage', { message, sender: socket.id });
  });

  //Event listener for the disconnect event on the socket.
  socket.on('disconnect', () => {
    console.log('Cliend with id : ' + socket.id + ' has disconnected.');
  });
});



server.listen(3003, () => {
  console.log('The server is running on port 3003.');
});


