require('dotenv').config();

const dbConnect = require('./db');
const express = require('express');
const routes = require('./routes');

const cors = require('cors');
const path = require('path');

const app = express();

dbConnect();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);