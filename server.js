const express = require('express');
const server = express();
const PORT = process.env.PORT || 3014;
const router = require('./routes/router');

server.set('view engine', 'ejs');

server.use('/', router);

server.listen(PORT, () => {
    console.log(`What do you call a coffee robbery? A mugging: ${PORT}`);
});