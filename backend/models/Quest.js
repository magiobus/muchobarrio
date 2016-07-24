"use strict"

var mongoose = require('./Model')

var Quest = new mongoose.Schema({
  title: String,
  points: Number,
  description: String,
  time: Number,
  place: {
    lat: Number,
    lon: Number
  }
})

var model = mongoose.model('quest', Quest)

exports.getQuest = function (questId) {
  return new Promise((resolve, reject) => {
    model.findOne({id: questId}, (err, res) => {
      console.log(err, res)
      resolve(res)
    })
  })
}

exports.getAllQuests = function () {
  return  new Promise((resolve, reject) => {
    model.find().exec((err, res) => {
      var result = res.sort(function() {return .5 - Math.random();})
      resolve(result)
    })
  })
}
