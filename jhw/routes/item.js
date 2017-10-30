var express = require('express');
var router = express.Router();

var mysql      = require('mysql');
var connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database:'jhw'
  
})

/* GET home page. */
router.get('/', function(req, res, next) {
	
	connection.query('SELECT * FROM item', function(err, rows, fields) {
		 res.header("Access-Control-Allow-Origin", "*");
  res.send(rows)
})
});


router.post('/detail', function(req, res, next) {
	
	res.header("Access-Control-Allow-Origin", "*");
  var id=req.body.abc
  console.log(req.body)
  console.log(id)
  connection.query('SELECT * FROM item WHERE id='+id, function(err, rows, fields) {
		 
  res.send(rows)
  console.log(rows)
  })
});

module.exports = router;
