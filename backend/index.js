const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const port = 3001;
app.listen(port, () => {
  console.log(`Server started on port ${port}. Ctrl^c to quit.`);

app.get('/', (req, res) => {
  res.send('This is the backend of my application');
});

app.use((req, res) => {
  res.status(404).send('Error! 404 Page not found');
});

});
