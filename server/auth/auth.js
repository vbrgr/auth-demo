var express = require("express");
var jwt = require('jsonwebtoken');
var mongodb = require("mongodb");
var mongoose = require('mongoose');
var mongojs = require("mongojs");
var router = express.Router();
var expiry = new Date();
expiry.setDate(expiry.getDate() + 7);
var userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

//create Client
var mongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/products";
var uri = "mongodb+srv://vbrgr:gHy6Uh7Khjb01yJL@cluster0-j5bqr.mongodb.net/products";
 
//creat rest API
router.get("/:email/:password", (req,res) => {
  var email = req.params.email;
  var password = req.params.password;
   var expiry = new Date();
   expiry.setDate(expiry.getDate() + 7);
   const PRIVATE_KEY = 'LOGINKEY123456';
 var token  = jwt.sign({
    email: email,
    password: password,
    exp: parseInt(expiry.getTime() / 1000),
  }, "PRIVATE_KEY"); // DO NOT KEEP YOUR SECRET IN THE CODE!
  generateJwt = function() {
  
  return token;
};
  var tim = new Date();
  tim.setDate(tim.getDate() + 7);
  mongoClient.connect(url, (err, client)=> {
    var collection =  client.db("products").collection("users");
    client.close(collection.findOneAndUpdate( {"email":email,"password":password}, { $set: {"islogin":true,"token":token}},function(errs,result) {
      if(errs) {
        res.send(errs);
      } else {
        res.json({"token" : this.generateJwt()});
        /*res.cookie("SESSIONID", this.generateJwt(), {httpOnly:true, secure:true});*/
      }
    })
  );
  });
});

module.exports = router;
