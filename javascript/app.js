var fs = require('fs');
var request = require("request");

var operation = process.argv[2];
var input = process.argv[3];

function getMusic() {
    console.log("getting music")
}

function getMovie() {
    console.log("getting movie");
    request("http://www.omdbapi.com/?t="+input+"&apikey=8c35a259", function(error, response, body){
        console.log(JSON.parse(body));
    });
}

function getConcert() {
    console.log("getting concert")
}

function doWhatItSays() {
    console.log("Understand?")
}
if(operation==="movie-this"){
    getMovie();
}


// if (operation == "spotify-this-song") {
//     return getMusic();
// } else if (operation == "movie-this") {
//     return getMovie();
// } else if (operation == "concert-this") {
//     return getConcert();
// } else if (operation == "do-what-it-says") {
//     return doWhatItSays();
// }else {
//     console.log("unsupported operation")
// }
// // get parameter and put it in the function when after inputting the lines. example mode app.js movie-this spiderman
// console.log(operation)

// var r = require('request');

// // var movie = process.argv[2];
// var movie = process.argv.slice(2).join(' ');

// var apiCall = 'https://www.omdbapi.com/?t=' + movie + '&y=&plot=short&apikey=trilogy';

// r(apiCall, function (error, response, data) {
// 	// console.log(data);
// 	console.log(JSON.parse(data).Plot);
// });