"use strict"

var mongoose = require('./Model')

var Quest = new mongoose.Schema({
  name: String,
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
