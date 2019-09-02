const express = require('express');
const port = 7000;
const server = express();

server.get('/', (req, res) => {
    console.log(`URL: ${req.url}`);
    res.send('Acumen Group');
});

server.listen(port, () => {
    console.log("listening on port 7000");
})