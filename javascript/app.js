require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var http = require("http");

var fs = require('fs');
var request = require("request");

var operation = process.argv[2];
var input = process.argv[3];

function getMusic(musicName) {

    spotify.search({ type: 'track', query: musicName }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log("Song Name: " + data.tracks.items[0].name);
        console.log("Artist's Name: " + data.tracks.items[0].album.artists[0].name);
        console.log("Spotify Link : " + data.tracks.items[0].album.external_urls.spotify);
        console.log("Album Name: " + data.tracks.items[0].album.name);
    })
}

function getMovie(movieName) {

    request("http://www.omdbapi.com/?t=" + movieName + "&apikey=8c35a259", function (error, response, body) {
        var jsonBody = JSON.parse(body);
        console.log("Title: " + jsonBody.Title);
        console.log("Year: " + jsonBody.Year);
        console.log("Country: " + jsonBody.Country);
        console.log("Plot: " + jsonBody.Plot);
        console.log("Actors: " + jsonBody.Actors);
        console.log("IMDB Rating: " + jsonBody.Ratings[0].Value);
        console.log("Rotten Tomatoes Rating: " + jsonBody.Ratings[1].Value);
        console.log("Metacritic Rating: " + jsonBody.Ratings[2].Value);
    });
}

function getConcert(concertName) {

    request("https://rest.bandsintown.com/artists/" + concertName + "/events?app_id=codingbootcamp", function (error, response, body) {
        var jsonBody = JSON.parse(body);
        for (let i = 0; i < jsonBody.length; i++) {
            console.log("Venue: " + jsonBody[i].venue.name);
            console.log("Location: " + jsonBody[i].venue.city + ", " + jsonBody[i].venue.region);
            console.log("Date Time: " + jsonBody[i].datetime);
            console.log("");
        }
    })
}
function doWhatItSays() {

    fs.readFile("./random.txt", "utf8", function (err, data) {
        console.log("Understand?");
        var strSplit = data.split(",");
        var fileOperation = strSplit[0];
        var fileInput = strSplit[1];
        
        if (fileOperation == "movie-this") {
            if (fileInput == undefined) {
                fileInput = "mr.nobody";
            }
            getMovie(fileInput);
        } else if (fileOperation == "concert-this") {
            getConcert(fileInput);
        } else if (fileOperation == "spotify-this-song") {
            if (fileInput == undefined) {
                fileInput = 'The Sign Ace of Base';
            }
            getMusic(fileInput);
        } 
    })
}

if (operation == "movie-this") {
    if (input == undefined) {
        input = "mr.nobody";
    }
    getMovie(input);

} else if (operation == "concert-this") {
    getConcert(input);

} else if (operation == "spotify-this-song") {
    if (input == undefined) {
        input = 'The Sign Ace of Base';
    }
    getMusic(input);
} else if (operation == "do-what-it-says") {
    doWhatItSays();
}
