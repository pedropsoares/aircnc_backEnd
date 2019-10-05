const express = require('express');
const app = express();

//  GET, POST, PUT, DELETE

app.post('/users', (req, res) => {
  return res.json({ messege: "Hello OmniStack" });
});

app.listen(3333);