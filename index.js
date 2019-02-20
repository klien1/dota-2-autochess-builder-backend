const express = require('express');
const http = require('http');
const app = express();
const cors = require('cors');

const corsConfig = {};
app.use(cors(corsConfig));

const port = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(port);
console.log('server listening on port ', port);
