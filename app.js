var express = require("express");
var app = express();

const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );


app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.get("/",function(req,res){
	res.render("home");
});

app.get("/about", function(req,res){
	res.render("about");
});

app.get("/testimonials", function(req,res){
	res.render("testimonials");
});

app.get("/contact", function(req,res){
	res.render("contact");
});



app.listen(3000,function(){
	console.log("server has started");
});