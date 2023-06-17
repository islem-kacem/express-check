const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/home', (req, res, next) => {
    res.status(200).sendFile(path.join(__dirname, '..','pages', 'home.html'))
});

module.exports = router;