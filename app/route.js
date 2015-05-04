var express = require('express');
var parser = require('body-parser');
var mongoose = require('mongoose');
var router = express.Router();

var schema = mongoose.Schema({
  id: Number,
  name: String,
  url: String,
  price: Number,
  tags: [String]
});

var Article = mongoose.model('Article', schema);

router.use(parser.json());
router.use(parser.urlencoded({extended: true}));

router.get('/articles', function(request, response) {
  Article.find(function(error, articles) {
    if (error) return console.log(error);
    response.send(articles);
  });
});

router.get('/articles/:id', function(request, response) {
  Article.findOne(function(error, article) {
    if(error) return console.log(error);
    response.status(200).send(article);
  });
});

module.exports = router;
