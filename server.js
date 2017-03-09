const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const config = require('./config.js');
const userController = require('./controllers/userCtrl');
const profileController = require('./controllers/profileCtrl');
const app = express();
const corsOptions = {
  origin: 'http://localhost:3000'
}

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(cors(corsOptions));
app.use(session({
  secret: config.sessionSecret,
  resave: true,
  saveUninitialized: true,
}));

// profileController.find()
app.get('/api/profiles', profileController.profiles);
app.post('/api/login', userController.login);

const port = 3000;
app.listen(port, function() {
  console.log(`Flexing on your ${port} port`);
})
