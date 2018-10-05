var express = require("express");
var jwt = require('jsonwebtoken');
var mongoose = require('mongoose');
var mongodb = require("mongodb");
var router = express.Router();
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
/**Mongo Connection */
var userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
//create Client
var mongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/products";
var uri = "mongodb+srv://vbrgr:gHy6Uh7Khjb01yJL@cluster0-j5bqr.mongodb.net/products";
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
/**Mongo Connection */
/**Mysql query */
  /* connection.query("INSERT INTO users VALUES ('','"+name+"','"+email+"','"+password+"','')", function (err, result) {
    if (err){
      res.send({"signupFail":"Please try again" + err });
    } else {
      res.send({"signupSuccess":"SignUp success."});
    }
  }); */
/**Mysql query */
});
module.exports = router;
