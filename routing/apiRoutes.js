const path = require("path");


    app.get('/api/friends', function(req,res){
        res.json(friends);
    });

    app.post('/api/friends', function(req,res){
        let newFriend = req.body;
        friends.push(newFriend);
        res.json(newFriend);
    });

    module.exports = app;