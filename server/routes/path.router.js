var express = require('express');
var router = express.Router();
var passport = require('passport');
var pool = require('../modules/pool');

router.get('/', function(req,res){
    pool.connect(function(errorConnectingToDatabase, client, done){
        if(errorConnectingToDatabase) {
            console.log('Error connecting to database', errorConnectingToDatabase);
			res.sendStatus(500);
        } else {
            client.query('SELECT * FROM paths;', function(errorMakingQuery, result){
                done();
                if(errorMakingQuery) {
					console.log('Error making database query', errorMakingQuery);
					res.sendStatus(500);
				} else {
					res.send(result.rows);
				}
            })
        }
    });
});

router.post('/new', function(req, res){
	console.log('path post was hit:', req.body);
	pool.connect(function(errorConnectingToDatabase, client, done){
		if(errorConnectingToDatabase) {
			console.log('Error connecting to database', errorConnectingToDatabase);
			res.sendStatus(500);
		} else {
            client.query('INSERT INTO paths (name, photos, address, rating, length, pavement, difficulty, crowds, notes, map) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);', 
            [req.body.name, req.body.photos, req.body.address, req.body.rating, req.body.length, req.body.pavement, req.body.difficulty, req.body.crowds, req.body.notes, req.body.map], function(errorMakingQuery, result) {
				done();
				if(errorMakingQuery) {
					console.log('Error making database query', errorMakingQuery);
					res.sendStatus(500);
				} else {
					res.sendStatus(201);
				}
			});
		}
	});
});

module.exports = router;