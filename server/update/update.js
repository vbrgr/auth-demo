var express = require("express");
var mongodb = require("mongodb");
var mongojs = require("mongojs");
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
router.put("/",function(req,res){
  var _id = req.body._id;
  var id = req.body.id;
  var name = req.body.name;
  var cost = req.body.cost;

  mongoClient.connect(url,function(err,client){
    var collection = client.db("products").collection("products");
    client.close(collection.updateOne({"_id":mongojs.ObjectId(_id)},{"$set":{"id":id,"name":name,"cost":cost}}).then(result => {
      if(result) {
        res.send({"updateSuccess":"Product updated successfully."});
      } else {
        res.send({"updateFail":"Product not updated"});
      }
    })
  );
  });

  /* connection.query("UPDATE products SET  id = '"+id+"', name ='"+name+"',cost = '"+cost+"')", function (err, result) {
    if (err){
      res.send({"updateFail":"Product not updated" + err });
    } else {
      res.send({"updateSuccess":"Product updated successfully."});
    }

    //console.log('The solution is: ', rows[0].solution)
  })*/

});
module.exports = router;
