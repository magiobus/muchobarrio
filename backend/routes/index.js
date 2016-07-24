var express = require('express')
var router = express.Router()

var Q = require('q')

var User = require('../models/User')
var Quest = require('../models/Quest')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

router.get('/main/', function (req, res) {

  var points = Math.floor((Math.random() * 700) + 100)
  var level = Math.floor(points / 100)

  Q.all([
    User.getUserByLevel(level, points),
    Quest.getAllQuests()
  ]).then(function (data) {
    res.send(data)
  })
})

module.exports = router
