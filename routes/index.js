var express = require('express');
var router = express.Router();

/* GET home page. */
router = (database) => {router.get('/', function(req, res, next) {
  console.log(database)
  res.render('index', { title: 'Express' });
});}

module.exports = router;
