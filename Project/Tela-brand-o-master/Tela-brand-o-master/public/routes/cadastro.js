var express = require('express');
var router = express.Router();

router.get('/i', function(req, res, next) {
  res.render('cadastro', { title: 'Express' });
});

router.get('/r', function(req, res, next) {
  res.send([{v:0, e:2, d:3}, {v:0, e:2, d:3}, {v:0, e:2, d:3}]); 
});

router.get('/rx', function(req, res, next) {
  res.status(403).send({x:0, www:2, ehehe:3}); 
});

module.exports = router;
