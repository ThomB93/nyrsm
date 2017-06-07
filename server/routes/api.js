var express = require("express"); //require part of nodejs
var router = express.Router();
var mongojs = require("mongojs");
var db = mongojs("mongodb://Thomasb:enejwak5042@ds155841.mlab.com:55841/rsm", ["laugs", "frivillige"]); //get task collection from db

//Get all laug
router.get("/laugs", function(req, res, next) { //callback function upon get
    db.laugs.find(function(err, laugs) { //find laug collection
        if(err) {
            res.send(err);
        } 
        res.json(laugs); //respond with laug as json 
    });
});
//Get all frivillige
router.get("/frivillige", function(req, res, next) { //callback function upon get
    db.frivillige.find(function(err, frivillige) { //find laug collection
        if(err) {
            res.send(err);
        } 
        res.json(frivillige); //respond with laug as json 
    });
});

//Get single laug
router.get("/laug/:id", function(req, res, next) { //callback function upon get
    db.laugs.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, laug) { //find tasks collection
        if(err) {
            res.send(err);
        } 
        res.json(task); //respond with single task as json 
    });
});

//Save task
router.post("/laug", function(req, res, next) {
    var laug = req.body; //get request task
    if(!laug.navn || (laug.beskrivelse + "")) {
        res.status(400); //bad request
        res.json({
            "error": "Bad data"
        });
    } else {
        db.tasks.save(laug, function(err, laug) {
            if(err) {
            res.send(err);
            } 
            res.json(laug); //show task saved
        });
    }
});

//Delete task
router.delete("/laug/:id", function(req, res, next) { //callback function upon get
    db.laugs.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, laug) { //find tasks collection
        if(err) {
            res.send(err);
        } 
        res.json(laug); //respond with single task as json 
    });
});

//Update task
router.put("/laug/:id", function(req, res, next) {
    var laug = req.body;
    var updLaug = {}; 

    if(laug.isDone) {
        updLaug.beskrivelse = laug.beskrivelse;
    }
    if(laug.title) {
        updLaug.navn = laug.navn;
    }
    if(!updLaug) {
        res.status(400);
        res.json({
            "error": "bad data"
        });
    } else {
        db.laugs.update({_id: mongojs.ObjectId(req.params.id)}, updLaug, {}, function(err, laug) { //find tasks collection
        if(err) {
            res.send(err);
        } 
        res.json(laug); //respond with single task as json 
    });
    }
    
});

module.exports = router;