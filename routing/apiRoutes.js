const path = require("path");
module.exports = function(app) {
//     app.get('/',function(req,res){
//     res.sendFile(path.join(__dirname, "../public/home.html"));
// });

    app.get('/api/friends', function(req,res){
        res.json(friends);
    });

    app.post('/api/friends', function(req,res){
        let newFriend = req.body;
        friends.push(newFriend);
        res.json(newCharacter);
    });
};