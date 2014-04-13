var express = require("express"),
    app = express(),
    MongoClient = require("mongodb").MongoClient,
    jade = require("jade");

app.engine("jade", jade.__express);

app.use(express.bodyParser());

MongoClient.connect("mongodb://localhost:27017/collection", 
    function (err, db) {
           

        app.get("/", function (req, res) {
            console.log("hello");
            
            return res.render("index.jade", {}, function (err, html) {
                console.log(err, html);
                res.send(200, html);
            });
        });

        console.log("it's on");
        app.listen(1337);
    });

