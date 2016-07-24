"use strict"

var mongoose = require('./Model')

var User = new mongoose.Schema({
  name: String,
  type: String,
  level: Number,
  avatarUrl: String
})

var model = mongoose.model('user', User)

exports.getUser = function (userId) {
  return new Promise((resolve, reject) => {
    model.findOne({id: userId}, (err, res) => {
      console.log(err, res)
      resolve(res)
    })
  })
}


exports.getUserByLevel = function(level, points) {

  return new Promise((resolve, reject) => {
    model.find({'level': level}).limit(1).exec((err, res) => {
      var user = res[0]
      user.points = points
      resolve(user)
    })
  })
}
