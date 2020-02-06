const http = require('http');

const url = require('url');

const express = require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded());
//console.log('Hello world');
//console.log('Whatsapp dude?');

app.use('/add-product', (req,res,next) => {
    //const { method } = req;
    //console.log(req);
    console.log('In the middleware!');
    res.send('<form action="/product" method="POST"><input type="text" name="title" /><button type="submit">submit</button></form>')
});

app.use('/product', (req,res,next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req,res,next) => {
    console.log('In the another middleware!');
    res.send('<h1>Hellow from middleware</h1>');
});

const server = http.createServer(app);

server.listen(3000, function() {
    console.log("Listening port 3000....")
});