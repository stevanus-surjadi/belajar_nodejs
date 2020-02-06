const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('You are in middleware 1');
    next();
});

app.use((req, res, next) => {
    console.log('You are in middleware 2');
    res.send('<h2>Hello, we are the middlewares');
});




app.use('/users', (req,res,next) => {
    res.send('Who are you looking for?');
});

app.use('/', (req,res,next) => {
    res.send('<h3>you are in index, dude! go home now!</h3>');
});

const server = http.createServer(app);

server.listen(3000, ()=>{
    console.log('Listening Port 3000.....');
});