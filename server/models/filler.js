var mongoose = require('mongoose');
//for assiciation:
var Schema = mongoose.Schema;

var fillerSchema = new mongoose.Schema({
	name: String,
})

mongoose.model('Filler', fillerSchema);