const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('Get request hit');
    res.send('Get request hit');
})
module.exports = router;