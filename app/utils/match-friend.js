// Dependencies
var friends = require('../data/friends');


module.exports = function (arr) {
    // Create an empty array for holding total differenses woth each user
    var matchScores = [];

    // Loop through every object in friends array
    for (var i = 0; i < friends.length - 1; i++) {
        // Variables of score arrys for comperisen
        var match = friends[i].scores;

        // The last object in the friends array is a current user
        var user = friends[friends.length - 1].scores;

        // Variable for holding the score difference 
        var totalDiff = 0;

        // Loop through an each score and compare them 
        for (var j = 0; j < 10; j++) {
            if (match[j] - user[j] != 0) {
                var diff = Math.abs(match[j] - user[j]);
                totalDiff += diff;
            }
        }

        // Push total difference into the array
        matchScores.push(totalDiff);
    }

    // Find the best match with the lowest score difference (if there is more then one it grabs the first one)
    var bestMatchIndex = matchScores.indexOf(Math.min.apply(Math, matchScores));

    return friends[bestMatchIndex];
}