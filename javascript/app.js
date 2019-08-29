require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api")
var spotify = new Spotify(keys.spotify);

var fs = require('fs');
var request = require("request");

var operation = process.argv[2];
var input = process.argv[3];

function getMusic(musicName) {
    console.log("getting music");
    request
}

function getMovie(movieName) {
    console.log("getting movie");
    request("http://www.omdbapi.com/?t=" + movieName + "&apikey=8c35a259", function (error, response, body) {
        console.log(JSON.parse(body));
    });
}

function getConcert(concertName) {
    console.log("getting concert");
    request("https://rest.bandsintown.com/artists/" + concertName + "/events?app_id=codingbootcamp", function (error, response, body) {
        // console.log(JSON.parse(body))
        var jsonBody = JSON.parse(body);
        console.log("Venue: " + jsonBody[0].venue.name);
        console.log("Location: " + jsonBody[0].venue.city + ", " + jsonBody[0].venue.region);
        console.log("Date Time: " + jsonBody[0].datetime);
    })
}
function doWhatItSays(sayWhat) {
    console.log("Understand?")
}
if (operation === "movie-this") {
    getMovie(input);
} else if (operation === "concert-this") {
    getConcert(input);
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