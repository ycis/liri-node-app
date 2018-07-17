var fs = require('fs');
var request = require('request');
var twitter = require('twitter');
var spotify = require('node-spotify-api');
var dotenv = require('dotenv');
var moment = require('moment');

dotenv.config();

var keys = require('./keys');
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var doWhat = process.argv[2];
var thenDoThis = process.argv.splice(3).join(' ');

switch (doWhat) {
    case `my-tweets`:
        var params = {
            screen_name: 'YcisB',
            count: 20
        };
        client.get('statuses/user_timeline', params, function(error, tweets, response) {
            if (!error) {
                console.log(tweets);
            }
            for(i in tweets) {
                console.log(tweets[i].created_at + ": " + tweets[i].text)
            };
        });
        break;
    case `spotify-this-song`:
        if(!thenDoMore) {
            console.log("ERROR: No Song Name Sent with request!")
        } else {

        }
        break;
    case 'movie-this':
    
        break;
    case 'do-what-it-says':

        break;
};