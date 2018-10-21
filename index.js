require('dotenv').config()
const app = require('express')();
const firebase = require("firebase");
const http = require('http').Server(app);
const io = require('socket.io')(process.env.SOCKET_PORT);

firebase.initializeApp({
	apiKey: process.env.API_KEY,
	authDomain: process.env.AUTH_DOMAIN,
	databaseURL: process.env.DATABASE_URL,
	storageBucket: process.env.STORAGE_BUCKET,
});
app.get('/', (req, res) => {
	res.send('<h1>Hello world</h1>');
});

http.listen(process.env.HTTP_PORT, () => {
	console.log(`listening on ${process.env.HTTP_PORT}`);
});