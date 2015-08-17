// app/routes.js

// grab the nerd model we just created
var Nerd = require('../models/schema.js');
//var Nerd=Nerdy.model;
console.log('nerd: '+Nerd.namez+' try: '+Nerd.model);
var express        = require('express');
var mongoose =require('mongoose');
var app            = express();
var db = require('../config/db.js');

var root="../public";
var router = express.Router(); 

var fkOpt = require('../config/flickr.js');

var Flickr = require("flickrapi"),
flickrOptions = {
      api_key: fkOpt.key,
      secret: fkOpt.secret
    };
  
	          // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)



    module.exports = function(app) {
		
		Flickr.authenticate(flickrOptions, function(error, flickr) {
  // we can now use "flickr" as our API object
 

  var key=flickr.options.api_key;
  console.log('my key = '+key);
  var newoptions={api_key: key};

  router.get('/images',function(req,res){
flickr.photos.getRecent(newoptions,function(error,data){
	
	console.log(data);
	res.json(data);
});
  }); 
  
  
});
		
		
mongoose.connect(db.url);
	app.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});
        // server routes ===========================================================
        // handle things like api calls
        // authentication routes
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});
        // sample api route
        router.get('/bull', function(req, res) {
            // use mongoose to get all nerds in the database
            Nerd.find({},function(err, nerds) {

                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
                if (err){
					res.send(err);
					
				}
                    
console.dir(nerds);
                res.json(nerds); // return all nerds in JSON format
            });
        });
		
		

        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('/', function(req, res) {
            res.sendFile("index.html", {"root": root}); // load our public/index.html file
        });

	app.use('/api', router);
    };