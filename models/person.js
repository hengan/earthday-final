var mongoose = require('mongoose');
mongoose.connect('mongodb://110219009:110219009@ds123361.mlab.com:23361/earthday');
// mongoose.connect('mongodb://localhost:27017/person');
var Schema = mongoose.Schema;

// Define Schema
var personSchema = new Schema({
  firstname : String,
  //lastname  : String,
  //age       : Number,
  occupation: String
});

module.exports = mongoose.model('Person', personSchema);
