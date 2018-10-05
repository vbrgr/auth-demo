const express = require("express");
const session = require("express-session");
const jwt = require('jsonwebtoken');
const mongodb = require("mongodb");
const mongoose = require('mongoose');
const mongojs = require("mongojs");
const http = require("http");


/**Mysql Connection /
var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'auth_demo'
});
connection.connect()
/**Mysql Connection */
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
    var email = req.params.email;
    var password = req.params.password;
     var expiry = new Date();
     expiry.setDate(expiry.getDate() + 7);
     const PRIVATE_KEY = 'LOGINKEY123456';
   var token  = jwt.sign({
      email: email,
      password: password,
      exp: parseInt(expiry.getTime() / 1000),
    }, PRIVATE_KEY); // DO NOT KEEP YOUR SECRET IN THE CODE!
  var tim = new Date();
  tim.setDate(tim.getDate() + 7);
  mongoClient.connect(url, (err, client)=> {
    var collection =  client.db("products").collection("users");
    client.close(collection.findOneAndUpdate( {"email":email,"password":password}, { $set: {"islogin":true,"token":token}},function(errs,result) {
      if(errs){
        res.send(errs);
      } else {
        //http.post('session.json', {"email":email,"password":password,"token":token}).subscribe((token) => result['value']);
        res.json(result['value']);
        req.session.user = email;
        req.session.save();
        /*res.cookie("SESSIONID", this.generateJwt(), {httpOnly:true, secure:true});*/
      }
    })
  );
  });
});



module.exports = router;
