'use strict';

const express = require('express')

const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.end('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Server Running on http://${HOST}:${PORT}`);
