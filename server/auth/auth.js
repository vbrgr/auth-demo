var express = require("express");
var mongodb = require("mongodb");

var router = express.Router();
//create Client
var mongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/users";
//creat rest API
router.get("/", (req,res) => {
  mongoClient.connect(url, (err, db)=> {
    db.collection("user_auth").find(req).toArray((err,array)=>{
      res.send(array);
    });
  });
});
module.exports = router;
