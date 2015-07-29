
var mongoose = require('mongoose');

var inputSchema = mongoose.Schema({
	
	startLanguage: {type : String},
	endLanguage  : {type : String},
	word	     : {type : String},
	
});

var Input = mongoose.model('Input', inputSchema);

module.exports = Input