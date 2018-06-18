//Dependencies
var friendsArr = require('../data/friends');
var matchFriends = require('../utils/match-friend');

module.exports = function (app) {
    // Rout for displaying friends array
    app.get('/api/friends', function(req, res){
        res.json(friendsArr)
    });

    // Rout for adding new user's data
    app.post('/api/friends', function(req, res){
        // Store req.body in variable
        var body = req.body;
        // Variable for converted array
        var newescores = [];

        // Loop through score array of string ans convert them into integers
        for(var i=0; i < req.body.scores.length; i++){
            newescores.push(parseInt(req.body.scores[i]))
        }

        // Update body.scores
        body.scores = newescores;
       
        // Send new body to Friends array
        friendsArr.push(body);

        // Send response to post request 
        res.json(true);
    });

    // Rout for finding the best match
    app.get('/api/bestmatch', function(req, res){
        // Send response to the get request as a json object
        res.json(matchFriends());
    });

}
