const http = require('http');

// const routes = require('./routes');

// const server = http.createServer(routes.handler);
const getanalysis = require('./routes/getdata');
// const getnews = require('./routes/news');
const express = require('express');

const app = express();

app.use(getanalysis);
// app.get('/getnews', getnews);

app.listen(3000);
