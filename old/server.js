const https = require('https');
const http = require('http');
const fs = require('fs');
const mysql = require('mysql');
const express = require('express');
const app = express();
app.use(require('body-parser').urlencoded({ extended: false }));
console.log("Server.js is running...");
app.use(express.static('./public'));
app.set('trust proxy', true);
app.get('/', function(req, res){
    res.redirect("/home");
});
app.get('/home', function(req, res){
	let homeContents = fs.readFileSync("./public/home.html");
    res.write(homeContents);
	res.end();
});
app.get('/ghost-exhibition', function(req, res){
	let homeContents = fs.readFileSync("./public/ghost.html");
    res.write(homeContents);
	res.end();
});
app.get('/sculpture', function(req, res){
	let homeContents = fs.readFileSync("./public/sculpture.html");
    res.write(homeContents);
	res.end();
});
app.get('/painting', function(req, res){
	let homeContents = fs.readFileSync("./public/painting.html");
    res.write(homeContents);
	res.end();
});
app.get('/drawing', function(req, res){
	let homeContents = fs.readFileSync("./public/drawing.html");
    res.write(homeContents);
	res.end();
});
app.get('/bio', function(req, res){
	let homeContents = fs.readFileSync("./public/bio.html");
    res.write(homeContents);
	res.end();
});
//Error handling
app.use((req, res, next) => {
    res.send("404 :(");
});

// error handler middleware
/*app.use((error, req, res, next) => {
	try{
		res.status(error.status || 500).send({
			error: {
				status: error.status || 500,
				message: error.message || 'Internal Server Error',
			},
		});
	}catch(error){
	}
});*/
//Security credentials
let options = {};
/*let options = {
    ca: [fs.readFileSync('cert/ca_bundle.crt')],
    cert: fs.readFileSync('cert/certificate.crt'),
    key: fs.readFileSync('cert/private.key')
};*/
//Launch server using credentials
let server = http.createServer(options, app);
server.listen(8080, function(){
    console.log("server running");
});