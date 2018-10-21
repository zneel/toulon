require('dotenv').config()
const app = require('express')();
const firebase = require("firebase");
const http = require('http').Server(app);
const io = require('socket.io')(3001);


app.get('/', (req, res) => {
	res.send('<h1>Hello world</h1>');
});

http.listen(3000, () => {
	console.log('listening on *:3000');
});