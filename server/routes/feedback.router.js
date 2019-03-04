const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');


router.post('/', (req, res) => {
    console.log('POST /feedback', req.body);
    pool.query(`INSERT INTO "feedback" 
                ("feeling", "understanding", "support", "comments")
                VALUES ($1, $2, $3, $4);`, 
        [req.body.feeling, req.body.understanding, req.body.support, req.body.comments] )
        .then(result => {
            res.send(result.rows);
        }).catch(error => {
            console.log('error with POST /feedback', error);
            res.sendStatus(500);
        })
});

router.get('/', (req, res) => {
    console.log('GET /feedback');
    pool.query(`SELECT * FROM "feedback"
                ORDER BY "date" DESC;`)
        .then(response => {
            res.send(response.rows);
        }).catch(error => {
            console.log('error with GET /feedback', error);
            res.sendStatus(500);
        })
});

module.exports = router;