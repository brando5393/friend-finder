module.exports = function(app) {
    app.get('/',function(req,res){
        res.sendFile(__dirname + '../public/index.html'); 
    });

    app.get('/survey',function(req,res){
        res.sendFile(__dirname + '../public/survey.html'); 
    });

};