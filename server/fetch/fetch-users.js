var express = require("express");
var mongodb = require("mongodb");
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
//create Client
var mongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/products";
var uri = "mongodb+srv://vbrgr:gHy6Uh7Khjb01yJL@cluster0-j5bqr.mongodb.net/products";
//creat rest API

router.get("/:email/:password", (req,res) => {
  mongoClient.connect(url, (err, client)=> {
   var collection =  client.db("products").collection("users");
   collection.find({email:req.params.email,password:req.params.password}).toArray((err,array)=>{
      if(err) {
        res.send(err);
      }else{
      res.send(array);
      }
    });
  });
});
module.exports = router;
