var mongoose = require('mongoose')

mongoose.connect('mongodb://coffi:coffi@ds029745.mlab.com:29745/barrio')

module.exports = mongoose
