const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');

router.get('/', (req,res,next) => {
    //console.log('In the another middleware!');
    //res.send('<h1>Hellow from middleware</h1>');
    res.sendFile(path.join(rootDir,'views','shop.html'));
});

module.exports = router;