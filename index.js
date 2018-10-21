require('dotenv').config()
const app = require('express')();
const firebase = require("firebase");
const http = require('http').Server(app);
const io = require('socket.io')(process.env.SOCKET_PORT);

app.get('/', (req, res) => {
	res.send('<h1>Hello world</h1>');
});

http.listen(process.env.HTTP_PORT, () => {
	console.log(`listening on ${process.env.HTTP_PORT}`);
});