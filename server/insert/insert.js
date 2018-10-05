var express = require("express");
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
//create Client
var mongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/products";
var uri = "mongodb+srv://vbrgr:gHy6Uh7Khjb01yJL@cluster0-j5bqr.mongodb.net/products";
//creat rest API
router.post("/",function(req,res){
  var id = req.body.id;
  var name = req.body.name;
  var cost = req.body.cost;
  var obj = {"id":id,"name":name,"cost":cost};
   mongoClient.connect(url,function(err,client){
    client.close(client.db("products").collection("products").insertOne(obj,function(errs,result) {
      if(errs) {
        res.send({"insertFail":"Adding product fail" + errs });
      } else {
        res.send({"insertSuccess":"Product added successfully."});
      }
    })
  );
  });

  /* connection.query("INSERT INTO products VALUES ('"+id+"','"+name+"','"+cost+"')", function (err, result) {
    if (err){
      res.send({"insertFail":"Adding product fail" + err });
    } else {
      res.send({"insertSuccess":"Product added successfully."});
    }

    //console.log('The solution is: ', rows[0].solution)
  }) */



});

module.exports = router;
