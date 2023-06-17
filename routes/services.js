const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/services', (req, res, next) => {
    res.sendFile(path.join(__dirname,'..','pages','services.html'))
});

module.exports = router;