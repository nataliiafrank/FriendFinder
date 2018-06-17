var friends = require('../data/friends');


module.exports = function (arr) {
    // console.log("HERE IS AN IMPORTED FILE")
    // console.log(friends)
    var matchScores = [];

    for (var i = 0; i < friends.length - 1; i++) {
        var match = friends[i].scores;
        var user = friends[friends.length - 1].scores;

        var totalDiff = 0;

        for (var j = 0; j < 10; j++) {
            if (match[j] - user[j] != 0) {
                var diff = Math.abs(match[j] - user[j]);
                totalDiff += diff;
            }
        }

        matchScores.push(totalDiff);
    }

    console.log(matchScores);

    var bestMatchIndex = matchScores.indexOf(Math.min.apply(Math, matchScores));
    console.log(bestMatchIndex);

    return friends[bestMatchIndex];
}