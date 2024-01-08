const express = require('express');
const cors = require('cors');
const path = require('path');
const passport = require('passport');

require('dotenv').config();

const app = express();

require('./config/passport')(passport);

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')))

const router = require('./Routes/Routes');
app.use('/', router);

const port = 3001;
app.listen(port, () => {
  console.log(`Server started on port ${port}. Ctrl^c to quit.`);
});

app.get('/', (req, res) => {
  res.send('This is the backend of my application');
});

app.use((req, res) => {
  res.status(404).send('Error! 404 Page not found');
});
