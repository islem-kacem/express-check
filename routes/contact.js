const express = require('express');
const path = require('path');

const router = express.Router();

router.use('/contact', (req, res, next) => {
    console.log(req.body);
    res.sendFile(path.join(__dirname,'..','pages','contact.html'))
});
module.exports = router;