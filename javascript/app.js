var operation = process.argv[2];

function getMusic() {
    console.log("getting music")
}

function getMovie() {
    console.log("getting movie")
}

function getConcert() {
    console.log("getting concert")
}

function doWhatItSays() {
    console.log("Understand?")
}

if (operation == "spotify-this-song") {
    return getMusic();
} else if (operation == "movie-this") {
    return getMovie();
} else if (operation == "concert-this") {
    return getConcert();
} else if (operation == "do-what-it-says") {
    return doWhatItSays();
}else {
    console.log("unsupported operation")
}
// get parameter and put it in the function when after inputting the lines. example mode app.js movie-this spiderman
console.log(operation)