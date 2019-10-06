const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

mongoose.connect('mongodb+srv://PedroSoares:Psoares1998@omnistack-jm4st.mongodb.net/admin?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

//  GET, POST, PUT, DELETE

//req.query = Acessar query params (para filtros)
//req.params = Acessar route params (para edição, delete
//req.bady = Acessar corpo da requisição (criação, edição)

app.use(express.json());
app.use(routes);

app.listen(3333);