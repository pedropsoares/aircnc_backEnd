const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

mongoose.connect('mongodb://PedroSoares:1234@omnistack-shard-00-00-jm4st.mongodb.net:27017,omnistack-shard-00-01-jm4st.mongodb.net:27017,omnistack-shard-00-02-jm4st.mongodb.net:27017/OmniStack?ssl=true&replicaSet=OmniStack-shard-0&authSource=admin&retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(express.json());
app.use(routes);

app.listen(3333);