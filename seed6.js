var express = require('express');
var request = require('request');
var app     = express();
var mongoose = require("mongoose");
var db = require('./models');


var keyword=['Diabete'];
var title1= "Beetroot";
var content1="Beetroot is highly beneficial for those who suffer from anemia due to iron deficiency, which is the most common of all types of anemia. It has high iron content, along with fiber, calcium, potassium, sulfur and vitamins. In addition to providing nutrition, beetroot helps cleanse the body and supply more oxygen throughout the body. This in turn helps increase the body’s red blood cell count. Blend one medium-size beetroot, three carrots and one-half of a sweet potato in a juicer. Drink this juice once daily. You can also eat beetroots as a cooked vegetable or in a salad. Eat the peel along with the beetroot for maximum nutritional value."

var title2="Blackstrap Molasses"
var content2="Blackstrap molasses is considered a nutritional powerhouse, especially for those who are anemic. It is a good source of iron, B vitamins and other essential minerals that help increase red blood cell production. A tablespoon of blackstrap molasses supplies almost 15 percent of your daily iron needs. Mix one tablespoon of blackstrap molasses in a cup of hot water or milk. Drink this once or twice daily. This drink is highly beneficial for pregnant women. Another option is to combine two teaspoons each of blackstrap molasses and apple cider vinegar in one cup of water. Drink this once daily."

var title3="Spinach"
var content3="A diet rich in green leafy vegetables like spinach is one of the best home cures for anemia. Spinach is rich in iron as well as vitamin B12 and folic acid, energy-boosting nutrients that the body needs to recover from anemia. A one-half cup of spinach provides almost 35 percent of your daily value of iron and 33 percent of your daily value of folic acid. Drink spinach soup twice daily. Mix two teaspoons of honey in a glass of fresh spinach juice. Drink this once daily. Follow either of these remedies for at least one month."

var title4="Pomegranate"
var content4="Pomegranate is rich in iron and other minerals, such as calcium and magnesium. It also contains vitamin C, which helps improve the body’s absorption of iron. This results in more red blood cells and an increase in the hemoglobin level. Mix one cup of pomegranate juice, one-fourth teaspoon of cinnamon powder and two teaspoons of honey. Drink this daily with your breakfast. Alternatively, take two teaspoons of dried pomegranate seed powder with a glass of warm milk one or two times daily. You can also eat a medium-size pomegranate every morning on an empty stomach"

var title5="Sesame Seeds"
var content5="Sesame seeds are also great for treating anemia due to their high iron content. One-fourth cup of sesame seeds provides almost 30 percent of the daily iron requirement. Soak two tablespoons of black sesame seeds in water for two to three hours. Strain and make a paste of the soaked seeds. Add one tablespoon of honey and mix well. Have this mixture twice daily. Soak one teaspoon of black sesame seeds in warm water for two hours. Grind the mixture into a paste and then strain it to get the emulsion. Mix the emulsion in a cup of warm milk, add honey or jaggery and drink it once daily."

var title6="Dates"
var content6="Dates are a rich source of iron as well as vitamin C that plays an important role in the body’s absorption of iron. Soak two dates in a cup of milk overnight. The next morning, eat the dates and drink the milk on an empty stomach. Alternatively, you can eat some dry dates on an empty stomach in the morning, followed by a cup of warm milk."

var title7="Apple"
var content7="Being rich in nutrients including iron, apples help a lot in treating anemia. Eat at least one apple daily. If possible, opt for green apples and eat them with their skin. You can also mix equal parts of fresh apple juice and beetroot juice and a little honey. Drink this juice twice daily."

var title8="Banana";
var content8="High in iron, banana stimulates the production of hemoglobin and many other enzymes that are essential for the formation of red blood cells. Also, it is a good source of magnesium that aids in hemoglobin synthesis. Eat one ripe banana along with one tablespoon of honey twice daily. Alternatively, mix one mashed ripe banana and one tablespoon of Indian gooseberry (amla) juice. Eat this two or three times daily."

var title9="Dried Black Currant";
var content9="Due to its high concentrations of iron and vitamin C, dried black currant has been found to be a very effective treatment for anemia. Vitamin C enhances the body’s ability to absorb the iron, increasing red blood cells and hemoglobin. Soak 10 to 12 dried black currants in water overnight. The next morning, remove them from the water and remove the seeds. Eat them daily before eating your breakfast. Follow this remedy for a few weeks."

var title10="Fenugreek"
var content10="Cook one cup of rice with two teaspoons of fenugreek seeds. Add some salt and eat it once daily for at least two to three weeks. You can also use fenugreek leaves in your cooking, especially in soups or salads. These home remedies are great for restoring a healthy red blood cell count in people who have anemia. Following a well-balanced diet is essential to prevent a recurrence."

var key= {
		content : "anemia"
	}

db.Keyword.create(key, function (error, keyw){
		if(error){
			console.log("error :", error);
		}
		console.log("the keyword created successfully", keyw);
		db.Advice.create({title:title1,
			content:content1,
			keywords:[],
			img:'http://pluslifestyles.com/wp-content/uploads/2014/08/Beetroot.jpg',
			link:""}, 
			function (error, adviceNew){
			if(error){
				console.log('error : ',error);
			}
			adviceNew.keywords.push(keyw);
			adviceNew.save();
			console.log("advice created with successfully", adviceNew);

		});

		db.Advice.create({title:title2,
			content:content2,
			keywords:[],
			link:"",
			img:'http://www.foodservicedirect.com/productimages/NF838904S.jpg'}, 
			function (error, adviceNew){
			if(error){
				console.log('error : ',error);
			}
			adviceNew.keywords.push(keyw);
			adviceNew.save();
			console.log("advice created with successfully", adviceNew);
		});

		db.Advice.create({title:title3,
			content:content3,
			keywords:[],
			link:"",
			img:'http://producemadesimple.ca/wp-content/uploads/2013/07/spinach.jpg'}, 
			function (error, adviceNew){
			if(error){
				console.log('error : ',error);
			}
			adviceNew.keywords.push(keyw);
			adviceNew.save();
			console.log("advice created with successfully", adviceNew);
		});

		db.Advice.create({title:title4,
			content:content4,
			keywords:[],
			link:'',
			img:'http://pomegranates.org/photos/3/fotolia_19716263_x.jpg'},
			function (error, adviceNew){
			if(error){
				console.log('error : ',error);
			}
			adviceNew.keywords.push(keyw);
			adviceNew.save();
			console.log("advice created with successfully", adviceNew);
		});

		db.Advice.create({title:title5,
			content:content5,
			keywords:[],
			link:"",
			img:'http://www.maangchi.com/wp-content/uploads/2014/09/toasted-sesame-seeds.jpg'},
			function (error, adviceNew){
			if(error){
				console.log('error : ',error);
			}
			adviceNew.keywords.push(keyw);
			adviceNew.save();
			console.log("advice created with successfully", adviceNew);
		});

		db.Advice.create({title:title6,
			content:content6,
			keywords:[],
			link:'',
			img:"http://images.wisegeek.com/bowl-of-medjool-dates.jpg"},
			function (error, adviceNew){
			if(error){
				console.log('error : ',error);
			}
			adviceNew.keywords.push(keyw);
			adviceNew.save();
			console.log("advice created with successfully", adviceNew);
		});

		db.Advice.create({title:title7,
			content:content7,
			keywords:[],
			link:'',
			img:'http://www.top10homeremedies.com/wp-content/uploads/2014/04/apples-opt.jpg'},
			function (error, adviceNew){
			if(error){
				console.log('error : ',error);
			}
			adviceNew.keywords.push(keyw);
			adviceNew.save();
			console.log("advice created with successfully", adviceNew);
		});

		db.Advice.create({title:title8,
			content:content8,
			keywords:[],
			link:'',
			img:'http://www.top10homeremedies.com/wp-content/uploads/2014/04/bananas-opt1.jpg'},
			function (error, adviceNew){
			if(error){
				console.log('error : ',error);
			}
			adviceNew.keywords.push(keyw);
			adviceNew.save();
			console.log("advice created with successfully", adviceNew);
		});

		db.Advice.create({title:title9,
			content:content9,
			keywords:[],
			link:'',
			img:'http://www.top10homeremedies.com/wp-content/uploads/2014/08/black-currant-dried-opt.jpg'},
			function (error, adviceNew){
			if(error){
				console.log('error : ',error);
			}
			adviceNew.keywords.push(keyw);
			adviceNew.save();
			console.log("advice created with successfully", adviceNew);
		});

		db.Advice.create({title:title10,
			content:content10,
			keywords:[],
			link:'',
			img:'http://www.top10homeremedies.com/wp-content/uploads/2012/10/fenugreek-seeds-3-opt.jpg'},
			function (error, adviceNew){
			if(error){
				console.log('error : ',error);
			}
			adviceNew.keywords.push(keyw);
			adviceNew.save();
			console.log("advice created with successfully", adviceNew);
		});

});

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;