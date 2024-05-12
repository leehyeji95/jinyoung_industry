// install npm express

const express = require('express');
const path = require('path');
const app = express();

const http = require('http').createServer(app);

// 임시 포트번호 8080
http.listen(8080, () => {
    console.log('Listening on 8080');
})

// node server.js &