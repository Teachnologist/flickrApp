var mongoose = require('mongoose');
var Schema=mongoose.Schema;
// define our nerd model
// module.exports allows us to pass this to other files when it is called
var names = new Schema({
   nameit : String
});
var name="testinghere";
var model0=mongoose.model('namez', names,'namez');

 module.exports = model0;

