require('dotenv').config();
const app = require('express')();
const firebase = require('firebase');
const bodyParser = require('body-parser');
const http = require('http').Server(app);
const io = require('socket.io')(process.env.SOCKET_PORT);

firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  storageBucket: process.env.STORAGE_BUCKET,
});

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('<h1>Hello hwolff</h1>');
});

app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => res.json({ user }))
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      res.json({ errorCode, errorMessage });
    });
});

app.post('/auth/register', (req, res) => {
  const { email, password } = req.body;
  firebase.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(user => res.json({ user }))
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      res.json({ errorCode, errorMessage });
    });
});

app.post('/auth/logout', (req, res) => {
  firebase.auth()
    .signOut()
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      res.json({ errorCode, errorMessage });
    }).then(user => res.json({ user }));
});

http.listen(process.env.HTTP_PORT, () => {
  console.log(`listening on ${process.env.HTTP_PORT}`);
});
