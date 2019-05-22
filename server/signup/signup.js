var express = require("express");
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var mongodb = require("mongodb");
var router = express.Router();

var userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
//create Client
var mongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/products";
var uri = "mongodb+srv://vbrgr:pp07qegyGyx1Y7tO@cluster0-j5bqr.mongodb.net/products";
router.post("/",function(req,res){
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  var obj = {"name":name,"email":email,"password":password,"islogin":false,"token":""};
  mongoClient.connect(url,function(err,client){
    var collection = client.db("products").collection("users");
    client.close(collection.insertOne(obj,function(err,result) {
      if(err) {
        res.send({"signupFail":"Please try again"});
      } else {
        res.send({"signupSuccess":"SignUp success."});
      }
    })
  );
  });
});
module.exports = router;
