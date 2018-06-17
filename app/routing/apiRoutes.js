var friendsArr = require('../data/friends');
var matchFriends = require('../utils/match-friend');

module.exports = function (app) {

    app.get('/api/friends', function(req, res){
        res.json(friendsArr)
    });

    app.post('/api/friends', function(req, res){
        
        var body = req.body;
        var newescores = [];

        for(var i=0; i < req.body.scores.length; i++){
            newescores.push(parseInt(req.body.scores[i]))
        }

        body.scores = newescores;
        console.log(body);
        
       
        friendsArr.push(body);

        res.json(true);
    });

    app.get('/api/bestmetch', function(req, res){
        res.json(matchFriends());
    });

}
