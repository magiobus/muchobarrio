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
