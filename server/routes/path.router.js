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

router.get('/details', function(req, res){
    pool.connect(function(errorConnectingToDatabase, client, done){
        if(errorConnectingToDatabase) {
            console.log('Error connecting to Database', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query('SELECT * FROM paths WHERE id=$1', [req.query.id], function (errorMakingQuery, result) {
                done();
                if(errorMakingQuery) {
                    console.log('Error Making Query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    res.send(result.rows);
                }
            });
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
            client.query('INSERT INTO paths (name, photos, address, length, pavement, difficulty, crowds, notes, latitude, longitude) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);', 
            [req.body.name, req.body.photos, req.body.address, req.body.length, req.body.pavement, req.body.difficulty, req.body.crowds, req.body.notes, req.body.latitude, req.body.longitude], function(errorMakingQuery, result) {
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

router.put('/upRating', function(req, res){
	console.log('put was received:', req.body);
	req.body.up_rating += 1;
    pool.connect(function(errorConnectingToDatabase, client, done){
        if(errorConnectingToDatabase) {
            console.log('Error connecting to Database', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query('UPDATE paths SET up_rating=$1 WHERE id=$2', [req.body.up_rating, req.body.id], function (errorMakingQuery, result) {
                done();
                if(errorMakingQuery) {
                    console.log('Error Making Query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    res.send(result.rows);
                }
            });
        }
    });
});

router.put('/downRating', function(req, res){
	console.log('put was received:', req.body);
	req.body.down_rating += 1;
    pool.connect(function(errorConnectingToDatabase, client, done){
        if(errorConnectingToDatabase) {
            console.log('Error connecting to Database', errorConnectingToDatabase);
            res.sendStatus(500);
        } else {
            client.query('UPDATE paths SET down_rating=$1 WHERE id=$2', [req.body.down_rating, req.body.id], function (errorMakingQuery, result) {
				done();
                if(errorMakingQuery) {
                    console.log('Error Making Query', errorMakingQuery);
                    res.sendStatus(500);
                } else {
                    res.send(result.rows);
                }
            });
        }
    });
});

router.delete('/:id', function(req, res){
	var pathId = req.params.id; 
	console.log('delete was hit!');
	pool.connect(function(errorConnectingToDatabase, client, done){
		if(errorConnectingToDatabase) {
			console.log('Error connecting to database', errorConnectingToDatabase);
			res.sendStatus(500);
		} else {
			client.query('DELETE FROM paths WHERE id=$1;', 
							[pathId], 
							function(errorMakingQuery, result) {
				done();
				if(errorMakingQuery) {
					console.log('Error making database query', errorMakingQuery);
					res.sendStatus(500);
				} else {
					res.sendStatus(200);
				}
			});
		}
	});
});

module.exports = router;