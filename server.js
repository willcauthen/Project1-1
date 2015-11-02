// SERVER-SIDE JAVASCRIPT

// REQUIREMENTS //
var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
    db = require('./models'),
    session = require('express-session'),
    
    nodemailer = require("nodemailer");

// CONFIG //
// set ejs as view engine
app.set('view engine', 'ejs');
// serve js & css files
app.use("/static", express.static("public"));
// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'SuperMegaGegaCookieSecret',
  cookie: { maxAge: 600000 }
}));

require('dotenv').load();
var email = process.env.Mail;
var pass = process.env.pass;
var smtpTransport = nodemailer.createTransport("SMTP",{
service: "Gmail",
auth: {
user: email,
pass: pass
}
});

// 
app.get('/',function (req, res){
	var advices=[];
		if ( req.session.user === undefined) {
			db.Advice.find().populate("keywords").exec(function (error , advicesFound) {
						for (var i=0; i< advicesFound.length;i++){
							if ( advicesFound[i].keywords[0].content ==="general") {
								advices.push(advicesFound[i]);
							}
						}
						res.render('index' ,{advices : advices});
			});
		}else if(req.session.user){
			var record = req.session.user.medicalRecord;
			var l = record.length;
			var random = Math.floor((Math.random() * (l)));
			db.Advice.find().populate("keywords").exec(function (error , advicesFound) {
						for (var i=0; i< advicesFound.length;i++){
							if ( advicesFound[i].keywords[0].content.toLowerCase() === record[random].toLowerCase() ) {
								advices.push(advicesFound[i]);
							}
						}
						res.render('index' ,{advices : advices});
			});
		}
});

app.get('/searchPage', function (req, res) {
	res.render('search');
});

app.post('/search', function (req, finalres){
	var input = req.body;
	console.log('the input', input);
	var advices=[];
	//console.log("the search word is", input);
	db.Advice.find().populate('keywords').exec(function (error, res){
			//console.log('2- the keyword found', res);
			for (var i=0; i< res.length;i++){
				if (res[i].keywords[0].content === input.search.toLowerCase()){
					advices.push(res[i]);
				}
			}
			finalres.json(advices);
	});	
});

app.get('/postShow/:id', function (req , res) {
	var id= req.params.id;
	console.log('the id selected is :', id)
	db.Advice.findById({_id: id}, function (error , result) {
		if(error) {
			console.log('error', error);
		}
		res.json(result);
	})
})

//Signing up :
app.post('/users', function (req, res) {
	var newUser = {
		firstName :req.body.firstName,
		lastName : req.body.lastName,
		email: req.body.email,
		password: req.body.password,
	};
	//console.log('the name :', req.body.firstName )
	db.User.createSecure(req.body.firstName, req.body.lastName, req.body.email, req.body.password, function (error, newUser){
		if(error) {
			console.log(" error : ",error);
		} 
		req.session.userId = newUser._id;
		req.session.user = newUser;
		res.send(newUser);
	} )
});

//log out :
app.post('/logout', function (req , res) {
	req.session.user = null;
	req.session.userId=null;
	res.json(req.session.user);
});


//LOGIN
app.post('/login', function (req, res) {
	//console.log("the login function : password = ", req.body.password2);
	db.User.authenticate(req.body.password2, req.body.email2 , function (error, userFound) {
		if(error) {
			console.log(" error : ",error);
			res.json("password wrong")
		} else if ((userFound !== null) && (userFound !== 'wrong email')){
			req.session.userId = userFound._id;
			req.session.user = userFound;
			console.log("sessiosn verification :", req.session.userId )
			res.json(userFound);
		} else if (error ==="Error: incorrect password" ) {
			res.send("password wrong");
		} else if (userFound === 'wrong email'){
			res.send('wrong email');
		}

	})
})

//Get the profile page 
app.get('/profile/:name', function (req, res) {
	var name = req.params.name;
	var userSession= req.session.user;
	//console.log('the user session :', userSession);
	res.render('userProfile', {user : userSession});
});

//Get the information to show in the update form
app.get('/profileUpdate', function (req, res) {
	db.User.findOne({_id : req.session.userId} , function (error, userFound) {
		if(error) {
			console.log("Error" , error);
		}else {
			res.json(userFound);
		}
	})
});

//Update the information of the user
app.patch('/updateProfile/:id', function (req , res) {
	var result = req.body.record.split(",");
	var user = {
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		network: req.body.network,
		medicalRecord: result
	};
	db.User.findByIdAndUpdate(req.session.userId, { $set : user} , function (error, userUpdated) {
		if(error) {
			console.log("Error :" , error); 
		}		
	});
	db.User.findOne({_id : req.session.userId}, function (error, userUp) {
		console.log('THE UPDATED USER IS :', userUp);
		req.session.user = user;
		res.json(userUp);	
	})
});


//Sessions
app.get("/current_user" , function (req , res) {
	var user = req.session.user;
	//console.log("the session is:", req.session.user);
	res.json({user : req.session.user});
	
})
app.get("/" , function (req , res) {
	var user = req.session.user;
	//console.log("the session is:", req.session.user);
	res.json({user : req.session.user});
	
})

app.get('/send', function (req, res) {
	var mailOptions = {
		from: 'racha@womenwhocode.com',
		to: 'br_bia@esi.dz',
		text: req.query.text
	}
	console.log(mailOptions);
	smtpTransport.sendMail(mailOptions, function (error, response) {
		if (error) {
			console.log("error :", error);
		} else {
			console.log("message sent :", response.response);
			res.send('sent');
		}
	});
});

app.listen(process.env.PORT || 3000, function () {
	console.log("listening on port 3000 ... success :)");
})

/*app.listen(4000, function (){
  console.log("listening on port 4000 ... success :)");
});*/