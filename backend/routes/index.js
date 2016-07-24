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
  console.log(req.query)
  Q.all([
    User.getUser(req.query.userName),
    Quest.getQuest(req.query.questName)
  ]).then(function (data) {
    res.send(data)
  })
})

module.exports = router
