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
var uri = "mongodb+srv://vbrgr:gHy6Uh7Khjb01yJL@cluster0-j5bqr.mongodb.net/products";
//create the Post Request
router.delete("/:id",function(req,res){
    var p_id = req.params.id;
    mongoClient.connect(uri,function(err,client){
          var collection =  client.db("products").collection("products");
          collection.remove({_id : mongojs.ObjectId(p_id)},
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
