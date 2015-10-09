var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', function(req, res, next) {
  res.render('register', {
	  'title': 'Register'
  });
});

router.get('/login', function(req, res, next) {
  res.render('login', {
	  'title': 'Login'
  });
});

router.post('/register',function(req, res, next){
	// Get Form Values
	var name = req.body.name;
	var email = req.body.email;
	var username = req.body.username;
	var password = req.body.password;
	var password2 = req.body.password2;

	// Check for Image Field
	if(req.file){
		console.log('Uploading File...');

		// File Info
		var profileImageOriginalName 	= req.file.originalname;
		var profileImageName 			= req.file.name;
		var profileImageMime 			= req.file.mimetype;
		var profileImagePath 			= req.file.path;
		var profileImageExt 			= req.file.extension;
		var profileImageSize 			= req.file.size;
	} else {
		// Set a Default Image
		var profileImageName = 'noimage.png';
	}
});

module.exports = router;
