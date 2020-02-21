const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../util/path')

router.get('/add-product', (req,res,next) => {
    //const { method } = req;
    //console.log(req);
    //console.log('In the middleware!');
    //res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title" /><button type="submit">submit</button></form>')
    res.sendFile(path.join(rootDir,'views','add-product.html'));
});

router.post('/add-product', (req,res,next) => {
    console.log(req.body);
    //res.redirect('/');
    
});

module.exports = router;