var mongoose = require('mongoose');


mongoose.connect( process.env.MONGOLAB_URI ||
                      process.env.MONGOHQ_URL || 
                      'mongodb://localhost/iHelp')
//Lets connect to our database using the DB server URL.
/*mongoose.connect('mongodb://localhost/iHelp');*/
module.exports.Keyword = require("./keyword.js");
module.exports.Advice= require("./advice.js");
module.exports.Doctor = require("./doctor.js");
module.exports.User= require("./user.js");