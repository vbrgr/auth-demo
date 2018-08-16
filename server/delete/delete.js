//import express
var express = require("express");
//create the Router Instance
var router = express.Router();
//import the mongodb
var mongodb = require("mongodb");
var mongojs = require("mongojs");
//create the MongoClient
var mongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/products";
//create the Post Request
router.delete("/",function(req,res){
    var p_id = req.query.id;
    mongoClient.connect(url,
                            function(err,db){
        db.collection('products').remove({_id : mongojs.ObjectId(p_id)},
                        function(err,result){
            if(err){
                res.send({"deleteFail":"Please try again"});
            }else{
                res.send({"deleteSuccess":"Deleted sucessfully"});
            }
        });
    });
});
//export the Router
module.exports = router;
